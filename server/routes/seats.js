const express = require('express');
const Seat = require('../models/Seat.model');
const User = require('../models/User.model');
const router = express.Router();

router.route('/')
  //read the list of all seats
  .get(function(req, res) {
    Seat.find(function(err, seats) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.json({status: "success", data: {seats: seats}});
    })
  })
  //create a new seat
  .post(function(req, res) {
    var emptySeat = {
      seatTitle: "No title",
      status: "free",
      coordinates: {x: "0", y: "0"}
    };
    var seat = new Seat(req.body.seat || emptySeat);
    seat.save(function(err, seat) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.status(201).json({status: "success", data: {seat: seat}});
    })
  })

router.route('/:seatId')
  //read a specific seat
  .get(function(req, res) {
    Seat.findById(req.params.seatId, function(err, seat) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      if (!seat) {
        res.status(404);
      }
      res.json({status: "success", data: {seat: seat}});
    })
  })
  //update a specific seat
  .put(function(req, res) {
    if (!req.body.seat) {
      return res.status(400).json({status: "error", error: "Missing new seat data"});
    }
    Seat.findByIdAndUpdate(req.params.seatId, req.body.seat, {new: true}, function(err, seat) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.json({status: "success", data: {seat: seat}});
    })
  })
  //delete a specific seat
  .delete(function(req, res) {
    Seat.findByIdAndRemove(req.params.seatId, function(err, seat) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.json({status: "success", data: {seat: seat}});
    })
  })

router.route('/free/:seatId')
  //free a specific seat
  .put(function(req, res) {
    var response = {};
    Seat.findById(req.params.seatId).then(function(seat) {
      if (seat.userId) {
        return User.findByIdAndUpdate(seat.userId, {seatId: null}, {new: true}).then(function(user){
          return response.user = user;
        })
      }
      return;
    }).then(function(){
      return Seat.findByIdAndUpdate(req.params.seatId, {userId: null, status: 'free'}, {new: true})
      .then(function(seat) {
        return response.seat = seat;
      })
    }).then(function(){
      return res.json({status: "success", data: response});
    }).catch(function(err){
      return res.status(500).json({status: "error", error: err});
    })
  })

module.exports = router;