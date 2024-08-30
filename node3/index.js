const express = require('express');
const app = express()

app.set("/", (req,res) =>{
    res.render("index")
})

app.listen(8000, ()=>(console.log("Servidor Operando com Sucesso!")))