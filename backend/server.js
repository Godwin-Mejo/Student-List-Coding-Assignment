const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
var cors= require('cors');
const app=express();




//Add Schema 
const students=require("./models/studSchema")

//Add Router
const router=require("./routes/router");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.Database).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Error")
})
app.listen(6000)


// mongodb+srv://admin:admin12345@cluster0.yag9vlw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0