const mongoose = require('mongoose');

const surveySchema= new mongoose.Schema({

    service:{type:String, required:true},
    email:{type:String, required:true},
    name:{type:String}

});

const survey = mongoose.model('Survey',surveySchema);

module.exports = survey;