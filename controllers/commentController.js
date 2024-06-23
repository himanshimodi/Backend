//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic
exports.createComment = async (req,res) =>{
    try{
        //fetch data here
        const {post,user,body} = req.body;
        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into our database
        const  savedComment = await comment.save();

        //find post using id jispe new comment add hua hai and then add the new comment to its comment array
        //we write await because its an interaction witht the database and we dont want to interrupt main thread flow
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}}, {new:true})         .populate("comments") //populates the comments array with comment documents
                            .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            error:"Error while creating comment",
        });
    }
};
