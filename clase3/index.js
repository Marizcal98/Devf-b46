const { request, response, json } = require('express')
const express = require('express')
const axios = require('axios')

const app = express()

const PORT = 4000

app.get('/', (request, response) =>{
    response.send('Hola')
})

app.get('/perro', (request,response) =>{
    response.send("Bienvenido a perroLand")
    console.log("noSimon")
})

app.get('/pokemon/:id', (request, response) => {
    const params = request.params
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then(pokeApiResponse => {
        response.json({
          pokemon: pokeApiResponse.data.name
        })
      })
      .catch( error => response.json({ error }))
  
  })

app.get('/search' , (request, response) => {
    const query = request.query
    response.json({
        query: query
    })
})

app.listen(PORT, () => {console.log("Server Inicializado en HTTP://localhost:" + PORT)})