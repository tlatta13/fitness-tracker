const db = require('../models');

module.exports = function (app) {
    // Get Route for getting last workout
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

    // Post Route for adding new workout
    app.post('/api/workouts', ({body}, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    });



    // Put route to update an existing workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate(
            params.id,
            {
                $push: { exercises: body }
            },
            {
                new: true,
                runValidators: true
            }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    });
}