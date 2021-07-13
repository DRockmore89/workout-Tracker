const router = require('express').Router();
const Workout = require('../models/Workout');

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((dbWorkout) => res.json(dbWorkout))
    .catch((err) => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {
      $push: { exercises: body },
    },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => res.json(dbWorkout))
    .catch((err) => {
      res.json(err);
    });
});

router.get('/api/workouts', (req, res) => {
  Workout.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

  router.get('/api/workouts/range', (req, res) => {
    Workout.find().then(data => {
      console.log(data)
      const updatedData = data.map(workout => {
        const totalDuration = workout.exercises.reduce((acc, curr) => acc+ curr.duration, 0)
        return {day: workout.day, _id: workout._id, exercises: workout.exercises, totalDuration}
      })
      res.json(updatedData)
    })
    .catch(err => {
      res.json(err)
    })
  });
module.exports = router;
