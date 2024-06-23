//instance of mongoose
const mongoose = require("mongoose");

//route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "like", //reference to the like model
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "comment", //reference to the comment model
    }],
   
});

//export
module.exports = mongoose.model("post",postSchema);