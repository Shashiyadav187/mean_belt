var mongoose = require('mongoose');
var appointment = mongoose.model('Appointment');

function AppointmentController() {
    this.index = function(req, res) {
        appointment.find({}, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                res.json(results);
            };
        }).populate('_creator');
    };
    this.create = function(req, res) {
        appointment.find({date: req.body.date}, function(err, results) {
            if (err) {
                console.log(err)
            } else {
                if (results.length < 3) {
                    appointment.find({_creator: req.body._creator,date:req.body.date}, function(err2, results2) {
                        if (err) {
                            console.log(err)
                        } else {
                            if (results2.length < 1) {appointment.create(req.body, function(err, result) {
                                    if (err) {
                                        console.log(err);
                                        res.json({
                                            error: err
                                        })
                                    } else {
                                        console.log("success creating appointment object", result);
                                        res.json(result);
                                    };
                                });
                            } else {
                                res.json({error: {errors: {something: {message: "one person can only schedule one appointment with the doctor within one day"}}}})
                            }
                        }
                    })
                } else {
                    res.json({error: {errors: {something: {message: "there is more than 3 appointment in one day please select some other date"}}}})
                }
            }
        })

    };
    this.delete = function(req, res) {
        appointment.remove({
            _id: req.body._id
        }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result)
            }
        })
    }
};
module.exports = new AppointmentController();
