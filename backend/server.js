const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extender: false,
    })
);

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`.rainbow);
});
