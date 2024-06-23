//instantiation of server
const express = require("express");
const app = express();

//load config file from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware needed to parse json request body
app.use(express.json());

//import routes for blog api
const blogRoutes = require("./routes/blog");

//mount the API routes
app.use("/api/v1",blogRoutes);

//lets do db connection
const dbConnect=() => require("./config/database");
dbConnect();

//start server
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);
})

//default route
app.get("/", (req,res)=>{
    res.send(`<h1>This is blog page baby</h1>`);
})