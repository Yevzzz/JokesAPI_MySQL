const db = require("../config/db");


class Joke {
    constructor(type, setup, punchline) {
        this.type = type;
        this.setup = setup;
        this.punchline = punchline;
    }

    async save() {
        let sql = `
        INSERT INTO jokes(
            type, 
            setup, 
            punchline
        )
        VALUES (
            '${this.type}',
            '${this.setup}',
            '${this.punchline}'
        )`;

        return db.execute(sql);
    }

    static findAllJokes(){
        let sql = "SELECT * FROM jokes;"

        return db.execute(sql);
    }

    static findJokeById(id){
        let sql = `SELECT * FROM jokes WHERE id = ${id};`

        return db.execute(sql);
    }

    async delete(jokeId, callback) {
        const sql = 'DELETE FROM jokes WHERE id = ?';
        connection.query(sql, [jokeId], (error, results, fields) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results.affectedRows);
            }
        });
    };

    static deleteJoke(id){
        let sql = `DELETE FROM jokes WHERE id = ${id};`

        return db.execute(sql);
    }
}

module.exports = Joke;