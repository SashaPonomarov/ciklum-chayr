const express = require('express');
const Seat = require('../models/Seat.model');
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
    if (!req.body.seat) {
      return res.status(400).json({status: "error", error: "Missing new seat data"});
    }
    var seat = new Seat(req.body.seat);
    seat.save(function(err, seat) {
      if (err) {
        return res.status(500).json({status: "error", error: err});
      }
      res.status(201).json({status: "success", data: {seat: seat}});
    })
  })




module.exports = router;