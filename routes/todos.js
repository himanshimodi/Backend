//instance of express
const express = require("express");
//instance of router
const router = express.Router();

//import controller
const{createTodo} = require("../controllers/createTodo");
const{getTodo, getTodoById} = require("../controllers/getTodo");
const{updateTodo} = require("../controllers/updateTodo");
const{deleteTodo} = require("../controllers/deleteTodo");


//define api routes i.e; map the path/route to the controller
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

//export
module.exports = router;
