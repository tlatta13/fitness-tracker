const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: new Date() //is this right?
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "You must enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "You must enter an exercise name"
                },
                duration: {
                    type: Number,
                    required: "Please enter your exercise duration in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: { virtuals: true }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, time) => {
      return total + time.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;