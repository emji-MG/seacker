const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  date : Date,
  arrRooms : Array,
  startBook : String,
  endBook : String,
  UserBook :{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
  
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting