// importar Express
const express = require('express')
const app = express()

// get (receber) e post (enviar)
app.get('/', (requisicao, resposta) => {
    resposta.send("Estou utilizando o Express!")
})