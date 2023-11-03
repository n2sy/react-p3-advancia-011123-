const mongoose = require("mongoose");

const Schema = mongoose.Schema; // const { Schema } = mongoose;

const personSchema = new Schema({
    prenom: {
        type: String,
        require: true
    },
    nom: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    profession: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: false
    },
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Personne', personSchema);