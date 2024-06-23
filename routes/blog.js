//instance of express
const express = require("express");


//instance of router
const router = express.Router();


//import controller
const {dummyLink, likePost, unlikePost} = require("../controllers/likeController")
const{createComment} = require("../controllers/commentController");
const {createPost,getAllPosts} = require("../controllers/postController");


//define api routes i.e; map the path/route to the controller
router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);



//export
module.exports = router; 
