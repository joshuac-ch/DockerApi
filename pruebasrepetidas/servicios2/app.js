const express=require('express')
const app=express()
const port=5000
app.get("/",(req,res)=>{
    res.send("Bienvenido de nuevo nino dev")
})
app.listen(port,()=>{
    console.log(`entar al siguiente link http://localhost:${port}`)
})
