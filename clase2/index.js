// let MathCalif = 8


// const promesa = new Promise ((resolve, reject) => {
//     if(MathCalif === 10){
//         resolve('Nuevo Celular')
//     }else{
//         reject('Sigue participando')
//     }
// })

// promesa
//     .then((res) =>{
//         console.log(res)
//     })
//     .catch((res) =>{
//         console.log("rechazo " + res)
//     })
//     .finally(() =>{
//         console.log("Siempre")
//     })


// console.log("mensaje sincrono")

const axios = require('axios')

// // axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
// //     .then(res => console.log(res.data))
// //     .catch(res => console.log(res.data))


// function getPokemonByName(pokemon){
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(res => console.log(res.data.name))
//     .catch(res => console.log(res.data))
// }

// function getPockemonMovesById(pokemon){
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(res => console.log(res.data.move.name))
//     .catch(res => console.log(res.data))
// }

// console.log(getAttackByID(pikachu))

// function getPersonAndPlanet(id){
//     axios.get(`https://swapi.dev/api/people/${id}`)
//     .then(res =>{
//         console.log(res.data.name)
//         axios.get(res.data.homeworld)
//         .then(res =>{
//             console.log(res.data.name)
//         })
//         .catch(err => console.log("error2"))
//     })
//     .catch(err => console.log("Error"))
// }

// getPersonAndPlanet(1)

