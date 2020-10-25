const { request, response, json } = require('express')
const express = require('express')
const axios = require('axios')

const app = express()

const PORT = 4000

app.get('/', (request, response) => {
    response.send('Hola')
})

app.get('/perro', (request, response) => {
    response.send("Bienvenido a perroLand")
    console.log("noSimon")
})

app.get('/pokemon/:id', (request, response) => {
    const { id } = request.params
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(Pokeres => {
            response.json({
                pokemon: Pokeres.data.name
            })
        })
        .catch(err => response.json({ err }))
})

app.get('/search', (request, response) => {
    const query = request.query
    response.json({
        query: query
    })
})

app.listen(PORT, () => { console.log("Server Inicializado en HTTP://localhost:" + PORT) })