const express=require('express')
const app=express()
const port=4000
app.get("/usuarios",(req,res)=>{
    res.send("Bienvendios a usuarios")
})
app.listen(port,()=>{
    console.log(`ingrese al sigueinte link del servicio usuarios  http://localhost:${port}`)
})
