//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");


//like a post 
exports.likePost = async (req,res) =>{
    try{
        //extract or fetch data
        const{post, user} = req.body;
        //create an object
        const like = new Like({
            post, user,
        });
        //save the fetched data into our database
        const savedLike = await like.save();

        //update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes: savedLike._id} }, {new:true}).populate("likes").exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            error:"Error while liking post",
        });
    }
}

exports.unlikePost = async (req,res) =>{
    try{
        //fetch
        const{post, like} = req.body;
        //fing by id and then delete
        const unlike = await Like.findOneAndDelete({post:post, _id:like});

        // check if unlike is null
        if (!unlike) {
            return res.status(404).json({
                error: "Like not found",
            });
        }

        //update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, 
                                                            {$pull: {likes: unlike._id}},
                                                            {new:true});

        res.json({
            post:updatedPost,
        });
    }
    catch(err){
        console.log(err);
        return res.status(400).json({
            error:"Error while unliking post",
        });
    }
}

exports.dummyLink = (req,res) =>{
    res.send("This is your dummy page");
};