const express =require("express")
const cors=require('cors')
const bodyParser= require("body-parser")
const  dotenv =require("dotenv")
const connection=require("./db")
 
const app=express();