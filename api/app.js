const express=require('express')
const cors=require('cors')
const app=express()
//la app podra usar cors
app.use(cors())
//permitir entradas json
app.use(express.json())
module.exports=app