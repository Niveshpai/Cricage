const router = require('express').Router();
let Player = require('../models/player.model');










router.route('players/').get((req, res) => {
  Player.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('players/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);

//   const newExercise = new Exercise({
//     username,
//     description,
//     duration,
//     date,
//   });


    const name = req.body.name;
    const innings = Number(req.body.innings);
    const runs = Number(req.body.runs);
    const highest = Number(req.body.highest);
    const avg = Number(req.body.avg);

    const newPlayer = new Player({
        name,
        innings,
        runs,
        highest,
        avg,
    })

  newPlayer.save()
  .then(() => res.json('Player added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('players/:id').get((req, res) => {
//   Player.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:name').get (async (req,res) =>{
    const name = req.body.name;
    var thename = req.params.name;
    const players = await Player.find( { "name" : { $regex : new RegExp(thename, 'i') } } );
    // console.log(req.params.name);
    console.log('Player found');
    console.log(players);
    // console.log('Player found');
})

router.route('players/:id').delete((req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then(() => res.json('Player deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});












router.route('/').get((req, res) => {
  Player.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);

//   const newExercise = new Exercise({
//     username,
//     description,
//     duration,
//     date,
//   });


    const name = req.body.name;
    const innings = Number(req.body.innings);
    const runs = Number(req.body.runs);
    const highest = Number(req.body.highest);
    const avg = Number(req.body.avg);

    const newPlayer = new Player({
        name,
        innings,
        runs,
        highest,
        avg,
    })

  newPlayer.save()
  .then(() => res.json('Player added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//   Player.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:name').get (async (req,res) =>{
//     const name = req.body.name;
//     var thename = name;
//     const players = await Player.find( { name : { $regex : new RegExp(thename, 'i') } } );
//     console.log('Player found');
//     console.log(players);
//     console.log('Player found');
// })

router.route('/:id').delete((req, res) => {
  Player.findByIdAndDelete(req.params.id)
    .then(() => res.json('Player deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;