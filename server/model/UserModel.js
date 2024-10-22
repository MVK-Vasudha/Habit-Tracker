const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true,"Enter Username : "],
        unique : [true,"User already registered"]
    },
    email : {
        type : String,
        required : [true,"Enter Email : "]
    },
    password : {
        type : String,
        required : [true,"Enter Password : "]
    },
    habits : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Habit'
    }]
},{
    timestamps : true
});

module.exports= mongoose.model("User",userSchema);