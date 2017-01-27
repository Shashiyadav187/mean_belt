var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
  _creator:{ type:mongoose.Schema.ObjectId,
                ref:'User',
                required:true },
  complain:{ type:String,
                required:true,
                minlength:10 },
  date:{ type:Date,
            required:true,
            min:Date.now()},
  time:{ type:Date,
            required:true
        }
},{
  timestamps:true
});
mongoose.model('Appointment',AppointmentSchema);
