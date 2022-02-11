const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find().then(allMovies => {
        res.render('../views/movies/movies', {movies: allMovies});
    }).catch(error => console.log(error))
});
// where do youdefine the movie id—it retrieves it from Mongoose?
router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params;
    Movie.findById(movieId)
    .then(movie => {
        res.render("../views/movies/movies-details", {movie})
    }).catch(error => console.log(error))
});

module.exports = router;