const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeatSchema = new Schema({
  seatTitle: String,
  status: String,
  userId: String,
  coordinates: {
    x: String,
    y: String
  }
});

SeatSchema.set('toJSON', {
     transform: function (doc, ret, options) {
       ret.seatId = ret._id;
       delete ret._id;
       delete ret.__v;
       return ret;
     }
});


module.exports = mongoose.model('Seat', SeatSchema);