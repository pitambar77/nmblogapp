const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require("path")
const userRoute = require('../Backend/routes/user');
const { blogRouter } = require('./routes/blog');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


dotenv.config({path:'./.env'});

const PORT = process.env.PORT || 8000 ;

// mongoose.connect("mongodb+srv://pitambermajhi33:blog33@cluster0.cl6oxgk.mongodb.net/Blog").then(()=>{
//     console.log('connection successful');
// }).catch((err)=>console.log(err,"Connection failed!!"));

require('./db/conn');

app.use(express.urlencoded({extended:false}))

app.use('/api/users',userRoute);
app.use('/api/blog', blogRouter);

app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
});

app.listen(PORT,()=>{
    console.log(`Server started at port no ${PORT} `)
})