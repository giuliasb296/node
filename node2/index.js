const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Seja bem vindo ao meu site!</h1><hr><br><h2>Titulo H2</h2>")
})

app.get("/ola/:nome/:escola?",function(req,res){
    let nome = req.params.nome //Enviado pelo usuário
    let escola = req.params.escola
    if(escola) {
        res.send("Olá " + nome + " do " + escola)
    }else if (nome) {
        res.send("Olá " + nome)
    }else {
        res.send("Olá")
    }

        
   // res.send("Olá " + nome + " do " + escola) // O sistema devolve para o usuário
})

app.get("/aluno",function(req,res){
    res.send("<h1>Esses aqui são os melhores Alunos!</h1><hr><h3>Juan, Miguel, Perugini, João H., João Carols, Matheus Figueiredo, Kethelyn, Diego, Beatriz, Samuel, Diogo, Henrique, Davi, Giullia Gentil, Vitória, Letícia, Gabriel Moura, Rafael Moura, Matheus Moreira, Maria Clara, Julia Bordinassi, Giovanna, Gabriel Pereira, Rebeca, André, Caroline, Pedro Henrique, Cauê, Pedro Claes</h3>") 
})

app.get("/prof",function(req,res){
    res.send("Professores Jansen e Luiz")
})

app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro no servidor!")    
    }else{
        console.log("Servidor iniciado com Sucesso!")
    }
})