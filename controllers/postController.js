const Post = require("../models/postModel");

exports.createPost = async (req,res) =>{
    try{
        const{title,body} = req.body;
        //creating object
        const post = new Post({
            title,body,
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(error){
        return res.status(404).json({
            error:"Error aara hai while creating post",
        });
    }
};

//export
exports.getAllPosts = async (req,res) =>{
    try{
        const posts = await Post.find().populate("comments").exec();
        //.populate("likes").populate("comments").exec(); -> we do populate so that we can fetch the actual comment and not just the id of the comment
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(404).json({
            error:"Error aara hai while fetching post",
        });
    }
}