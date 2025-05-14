const app=require('./app')
const port=5000
app.get("/",(req,res)=>{
    res.send("Api corriendo")
})
app.get("/usuarios",(req,res)=>{
    res.send("Bienvenidos a mostrar ninodev")
})
app.get("/about",(req,res)=>{
    res.send("Bienvenidos a sobre nossotros")
})
app.listen(port,()=>{
    console.log(`entrar al siguiente link http://localhost:${port}`)
})