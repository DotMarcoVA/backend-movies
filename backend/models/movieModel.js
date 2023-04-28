const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Introduce el titulo"],
        },
        overview: {
            type: String,
            required: [true, "Introduce la sinopsis"],
        },
        poster_path: {
            type: String,
            required: [true, "Introduce la ruta del Poster"],
        },
        release_date: {
            type: String,
            required: [true, "Introduce la fecha de estreno"],
        },
        votes: {
            type: Number,
            required: [true, "Introduce los votos actuales"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Movie", userSchema);
