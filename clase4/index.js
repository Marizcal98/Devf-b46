const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const port = 4000

const user = 'Marizcal'
const pass = 'KAVNyJ4lv0CRdqaP'
const db = 'b46'


mongoose.connect(process.env.MONGO_URI , {useNewUrlParser:true, useUnifiedTopology:true} )
    .then(res => console.log(`Mongo conectado a: ${res.connections[0].name}`))
    .catch(err => console.log(err))



const CartoonSchema = new mongoose.Schema({
    name: String,
    release_Year: Number,
    img: {
        type: String,
        default: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWZL5Z0R/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg'
    },
    country: String,
    author: String
})


app.use(express.json({ extended: true}))

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a mi api, prueba crear una caricatura con el endpoint /cartoon/create'})
})

//Introducir datos a la db
app.post('/cartoon/create', async(req,res)=>{
    const body = req.body
    const newCartoon = new Cartoon(body)
    const cartoonDoc = await newCartoon.save()
    res
    .status(201)
    .json({
        message: 'Se ha guardado en la base de datos',
        cartoon: cartoonDoc
    })
})

//funcion retornar datos por autor
app.get('/cartoon/find/:name', async(request,response) =>{
    const { name } = request.params
    const carton = (await Cartoon.find({author: `${name}`}).exec())
    let series='';
    for (const dato in carton) {
        if(dato != carton.length-1){
            series+=carton[dato].name+', '
        }else{
            series+=carton[dato].name
        }
      
    }
    response.json({
        message: `Su series son: ${series}`
    })
}
)

//funcion para eliminar
app.set('/cartoon/delete/:name', async(req,res) =>{
    const {name} = req.params
    const cartond = await Cartoon.deleteOne({author: `${name}`})
    cartond.deletedCount;
    res.json({
        message: `Serie eliminada`
    })
})

app.p

const Cartoon = mongoose.model('Cartoons',CartoonSchema)

SpongeBob = {
    name:"Bob esponja",
    release_Year: 1999,
    img: 'https://www.tonica.la/__export/1592148570601/sites/debate/img/2020/06/14/bob-esponja-parte-de-la-comunidad-lgbtq.jpg_423682103.jpg',
    country: 'US',
    author: 'Stephen Hillenburg'
}

rocketPowers = {
    name:"Rocket Powers",
    release_Year: 1999,
    img: 'https://www.tonica.la/__export/1592148570601/sites/debate/img/2020/06/14/bob-esponja-parte-de-la-comunidad-lgbtq.jpg_423682103.jpg',
    country: 'US',
    author: 'Nickelodeon'
}

const saveCartoon = async(cartoon) =>{
    const newCartoon = new Cartoon(cartoon)
    const cartoonDoc = await newCartoon.save()
    console.log(cartoonDoc)
    return cartoonDoc
}

app.listen(port, ()=> {
    console.log(`Server inicializdo en : https://localhost:${port}`)
})

// saveCartoon(rocketPowers)

// newCartoon
//     .save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))