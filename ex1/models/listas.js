const mongoose = require('mongoose');

const listasSchema = new mongoose.Schema({
    _id : Number,
    designacao : String,
    data : String,
    produtos : [{
        designacao : String,
        categoria : String,
        quantidade : {
            valor : String,
            unidade : String
        }
    }]
}, { versionKey: false});

module.exports = mongoose.model('listas', listasSchema, 'listas');