const Workout = require('../models');

module.exports = function (app) {
    // Get Route for getting last workout
    app.get('/api/workouts', function(req, res) {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    });

    // Post Route for adding new workout
    app.post('/api/workouts', function(req, res) {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

    // Put route to update an existing workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        
    });
}