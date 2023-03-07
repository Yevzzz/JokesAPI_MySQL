const express = require("express");
const {getJokes, getJokeById, postJokes, deleteJoke} = require("../controllers/controllers_jokes");


router = express.Router();


router.get("/get", getJokes);
router.get("/get/:id", getJokeById);
router.post("/post", postJokes);
router.post("/delete/:id", deleteJoke);

module.exports = router;