users = require('../controllers/userController.js')
appointments = require('../controllers/appointmentController.js')
module.exports = function(app) {

    app.post('/user', users.create);
    app.get('/users', users.index);
    app.post('/FindUserByName', users.find);
    app.post('/show', users.show);
    app.post('/FindUserByID', users.findid);

    app.get('/appointments', appointments.index);
    app.post('/appointment', appointments.create);
    app.post('/DeleteAppointment', appointments.delete);
}
