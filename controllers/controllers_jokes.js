const Joke = require("../models/models_jokes")

exports.getJokes = async ( req, res, next) => {
    try {
        const [jokes, _] = await Joke.findAllJokes();

        res.status(200).json({jokes});
    }catch (error){
        console.log(error);
        next(error);
    }
}

exports.getJokeById = async ( req, res, next) => {
    try {
        let jokeId = req.params.id;
        let [joke, _] = await Joke.findJokeById(jokeId)

        res.status(200).json({joke: joke[0]});
    }catch (error) {
        console.log(error);
        next(error);
    }
}

exports.postJokes = async ( req, res, next) => {
    try {
        let {type, setup, punchline} = req.body;
        let joke = new Joke(type, setup, punchline);

        joke = await joke.save();

        res.status(201).json({message: "Joke Created"})
    }catch (error) {
        console.log(error);
        next(error);
    }
}


exports.deleteJoke = async ( req, res, next) => {
    try {
        let jokeId = req.params.id;
        let [joke, _] = await Joke.deleteJoke(jokeId)

        res.status(200).json({message: 'Joke deleted successfully'});
    }catch (error) {
        console.log(error);
        next(error);
    }
}