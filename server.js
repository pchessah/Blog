const express = require ("express")
const mongoose = require("mongoose")
const router = require("./routes/index")

const app =  express()
const PORT = 5000
const MONGO_URI = "mongodb://localhost:27017/articles"

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api", router)

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false})

mongoose.connection.once("open", ()=>{
    console.log("Connected to database");
})

mongoose.connection.on("error", (error) =>{
    console.log("Mongoose connection error: "+ error);
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})