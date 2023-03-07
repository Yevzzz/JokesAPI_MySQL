require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const {json} = require("express");
const {listen} = require("express/lib/application");
const cors = require("cors");
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Redirect requests to endpoint starting with /jokes to routes_jokes.js
app.use("/jokes", require("./routes/routes_jokes"));

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went really wrong",
    });
});

//Listen on PC Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));