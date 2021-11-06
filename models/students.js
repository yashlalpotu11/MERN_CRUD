const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50,
        trim : true
    },
    email : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 255,
        trim : true,
    },
    enrollNumber : {
        type : Number,
        required : true,
        min : 1,
        max : 100,
    }
})
module.exports = mongoose.model('Students', studentSchema);