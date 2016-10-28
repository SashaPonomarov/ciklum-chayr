const express = require('express');
const User = require('../models/User.model');
const router = express.Router();

router.route('/search')
  //search for users by name or email
  .get(function(req, res) {
    if (!req.query.s) {
      return res.status(400).json({status: "error", error: "Missing search query"});
    }
    var re = new RegExp(req.query.s, 'i');
    var conditions = [{$or: [ {fullName: { $regex: re }}, 
                              {email: { $regex: re }}] 
                      }];
    if (req.query.noSeat) { conditions.push({seatId: null}); }
    
    User.aggregate([
      {$project: { fullName : { $concat : [ "$name", " ", "$lastName" ] },
                    seatId: 1,
                    name: 1,
                    lastName: 1,
                    email: 1,
                    userId: "$_id",
                    _id: 0
       }},
      {$match: {$and: conditions}}
    ])
    .exec(function(err, users){
      res.json({status: "success", data: users});
    });
  })

router.route('/')
  //read the list of all users
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.json({status: "success", data: {users: users}});
    })
  })

router.route('/:userId')
  //read a specific user
  .get(function(req, res) {
    User.findById(req.params.userId, function(err, user) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      if (!user) {
        res.status(404);
      }
      res.json({status: "success", data: {user: user}});
    })
  })
  //update specific user's seatId
  .put(function(req, res) {
    if (!req.body.user) {
      return res.status(400).json({status: "error", error: "Missing new user data"});
    }
    User.findByIdAndUpdate(req.params.userId, req.body.user, {new: true}, function(err, user) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.json({status: "success", data: {user: user}});
    })
  })

module.exports = router;