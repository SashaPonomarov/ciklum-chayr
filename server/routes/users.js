const express = require('express');
const User = require('../models/User.model');
const router = express.Router();

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