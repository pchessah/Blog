const express = require ("express")
const mongoose = require("mongoose")
const router = require("./routes/index")
const path = require("path")
const PORT =  process.env.PORT || 5000
require("dotenv").config
const LOCAL_DB = "mongodb://127.0.0.1:27017/articles"


const app =  express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api", router)

mongoose.connect(process.env.MONGODB_URI || LOCAL_DB, {useNewUrlParser: true, useFindAndModify: false})

mongoose.connection.once("open", ()=>{
    console.log("Connected to database");
})

mongoose.connection.on("error", (error) =>{
    console.log("Mongoose connection error: "+ error);
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))

    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})