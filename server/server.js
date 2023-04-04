const express =require("express")
const cors=require('cors')
const bodyParser= require("body-parser")
const  dotenv =require("dotenv")
const connection=require("./db")
const AuthRoute=require("./routes/AuthRoute")
const app=express();
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
app.use('/auth',AuthRoute)
const port=process.env.PORT || 5000;
connection()
app.listen(port,()=> console.log(`app is listening at ${port}`))