var Saludo = "Hola, " //variables globales - var
let Destinatario = "Gunter" //variables limitadas por scope - let
// const edad = 23

{    
    console.log(Saludo + Destinatario) //las llaves definen como un espacio de trabajo
                                       //Este incluye un scope
}

const dog = {
    name: "Fito",
    age: 23
}

dog.name = "Firulais" //Si hace el cambio a pesar de ser const

const booleano = false //boleano
const undef = undefined //sin definir
const voidValue = null //vacio

if(undef){
    console.log("Verdadero")
}else{
    console.log("falso")
}

//comparaciones con === para comparar valor y tipo

/* Ejercicio


*/

//Arrow Function
const add = (x,y) => x + y

const num = add(5,6)


console.log(num);



const dog2 = {
    name: "Fito",
    age: 23,
    ladrar(){
         return `Hola mi nombre es: ${this.name}`
    }
}

console.log(dog2.ladrar())