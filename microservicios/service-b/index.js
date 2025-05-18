const express=require('express')
const app=express()
const port=4001
app.get("/productos",(req,res)=>{
    res.send("Bienvenido al Api de productos")
})
app.listen(port,()=>{
    console.log(`ingrese al siguiente link del servicio 2 http://localhost:${port}`)
})