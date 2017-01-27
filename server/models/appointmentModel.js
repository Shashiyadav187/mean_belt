var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
  _creator:{ type:mongoose.Schema.ObjectId, ref:'User', required:true },
  complain:{ type:String, required:true, minlength:10 },
  date:{ type:Date, required:true, min:Date.now()},
  time:{ type:Date, required:true, max:"1970-01-01T23:00:00.000Z", min:"1970-01-01T14:00:00.000Z"}
},{
  timestamps:true
});
mongoose.model('Appointment',AppointmentSchema);
