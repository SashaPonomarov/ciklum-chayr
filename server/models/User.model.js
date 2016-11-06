const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function deleteEmpty (v) {
   if(v==null){
     return undefined;
   }
   return v;
}

const UserSchema = new Schema({
  seatId: { type: String, set: deleteEmpty },
  name: String,
  lastName: String,
  email: String
});

UserSchema.set('toJSON', {
     transform: function (doc, ret, options) {
       ret.userId = ret._id;
       delete ret._id;
       delete ret.__v;
       return ret;
     }
});


module.exports = mongoose.model('User', UserSchema);