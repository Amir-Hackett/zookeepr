//allows you to declare routes in any file as long as you use the proper middleware.
const router = require('express').Router()
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });
  
  router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

   //route listens for a post request
   router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString()
  
    //if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)){
      res.status(400).send('The animal is not properly formatted')
    } else {
    //adds animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals)
  
    //req.body is where our incoming content will be
    res.json(req.body)
    }
  })
  
  module.exports = router