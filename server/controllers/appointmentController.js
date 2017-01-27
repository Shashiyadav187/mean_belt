var mongoose = require('mongoose');
var appointment = mongoose.model('Appointment');

function AppointmentController() {
    this.index = function(req, res) {
        appointment.find({}, function(err, response) {
            if (err) {
                console.log(err);
            } else {
                res.json(response);
            };
        }).populate('_creator');
    };
    this.create = function(req, res) {
        appointment.find({
            date: req.body.date
        }, function(err, response) {
            if (err) {
                console.log(err)
            } else {
                if (response.length < 3) {
                    appointment.find({
                        _creator: req.body._creator,
                        date: req.body.date
                    }, function(errs, responses) {
                        if (err) {
                            console.log(err)
                        } else {
                            if (responses.length < 1) {
                                appointment.create(req.body, function(err, result) {
                                    if (err) {
                                        console.log(err);
                                        res.json({
                                            error: err
                                        })
                                    } else {
                                        res.json(result);
                                    };
                                });
                            }
                        }
                    })
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
