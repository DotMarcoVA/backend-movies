const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
});

const setMovies = asyncHandler(async (req, res) => {
    // Verificar que sea admin
    const adminFlag = req.user.isAdmin;
    if (adminFlag != true) {
        res.status(401);
        throw new Error("Acceso no Autorizado para Usuarios");
    }
    let { title, overview, genre, poster_path, trailer_path, release_date, votes } = req.body;
    if (!trailer_path) {
        trailer_path = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    if (!title || !overview || !genre || !poster_path || !release_date || !votes) {
        res.status(400);
        throw new Error("Verificar que todos los campos esten llenos correctamente");
    }
    const movie = await Movie.create({
        title,
        overview,
        genre,
        poster_path,
        trailer_path,
        release_date,
        votes,
    });

    res.status(201).json(movie);
});

const updateMovie = asyncHandler(async (req, res) => {
    const adminFlag = req.user.isAdmin;
    if (adminFlag != true) {
        res.status(401);
        throw new Error("Acceso no Autorizado para Usuarios");
    }
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(400);
        throw new Error("No se ha encontrado la pelicula especificada");
    }

    const modifiedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(modifiedMovie);
});

const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(400);
        throw new Error("No se ha encontrado la pelicula especificada");
    }
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: `Se ha eliminado el producto con id ${req.params.id}`, deletedMovie });
});

module.exports = {
    getMovies,
    setMovies,
    updateMovie,
    deleteMovie,
};
