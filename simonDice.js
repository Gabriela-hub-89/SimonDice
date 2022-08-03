

// let ronda = 0
// let rondas = []
// let rondaJuego = []
// let rondaUsuario = []


// document.querySelector('#empezar').onclick = empezarJuego



// function empezarJuego() {

//     ronda++




//     // numeroRandom()
//     // resaltarCuadro(numeroRandom(), capturarCuadros())
//     turnoJugador(resaltarCuadro())
    
// }


// function resaltarCuadro(numeroRandom, cuadros) {

//     let cuadroResaltado;
//     const tiempo = 1000

//     for (const cuadro in cuadros) {
//         if(numeroRandom === Number(cuadros[cuadro].innerText)) {
//             cuadroResaltado = cuadros[cuadro]
//             cuadroResaltado.style.opacity = 1
//             rondaUsuario.push(cuadroResaltado)
//             setTimeout(() => {
//             cuadroResaltado.style.opacity = 0.5
//             }, tiempo);
//             }
//     }
//     console.log(rondaUsuario)
//     return cuadroResaltado

    
// }

// function turnoJugador(cuadroResaltado) {

//     resaltarCuadro(numeroRandom(), capturarCuadros())
//     console.log(cuadroResaltado)

    
//     return
// }

// function numeroRandom() {

//     const numRandom = (Math.floor(Math.random() * (4-1+1)+1))
//     return numRandom
// }

// function capturarCuadros() {

//     const amarillo = document.querySelector('#cuadro-uno')
//     const rojo = document.querySelector('#cuadro-dos')
//     const verde = document.querySelector('#cuadro-tres')
//     const azul = document.querySelector('#cuadro-cuatro')



//     let cuadros = {
//         cuadroAmarillo : amarillo,
//         cuadroRojo : rojo,
//         cuadroVerde : verde,
//         cuadroAzul : azul
//     }
//     return cuadros

// }

const uno = document.querySelector('#cuadro-uno')
const dos = document.querySelector('#cuadro-dos')
const tres = document.querySelector('#cuadro-tres')
const cuatro = document.querySelector('#cuadro-cuatro')

let arrayRonda = []
let rondas = 0

function obtenerCuadroRandom() {
    
    let random = calcRandom()
    let cuadros = capturarCuadros()
    let elemento;
    for (const cuadro in cuadros) {
        
        if(Number(cuadros[cuadro].innerText) === random) {
            
            elemento = cuadros[cuadro]
        }

    }
    
    return elemento
}

function guardarCuadroArray() {
    const elemento = obtenerCuadroRandom()
    arrayRonda.push(elemento)
    
    return arrayRonda
    

}
// después hay que hacer que esta funcion se vaya ejecutando varias veces
// y qué por cada vez vaya agregando un nuevo cuadro seleccionado al array
guardarCuadroArray()

function resaltarCuadroRandom() {

    let elemento = obtenerCuadroRandom()
    let tiempo = 1000
    
    elemento.style.opacity = 1

    setTimeout(() => {
        elemento.style.opacity = 0.5
        elemento.style.transition = 'opacity 0.5s'
    }, tiempo);
    
    
}
resaltarCuadroRandom()


function capturarCuadros() {
    
    let cuadros = {
        cuadroUno : uno,
        cuadroDos : dos,
        cuadroTres : tres,
        cuadroCuatro : cuatro
    }

    return cuadros
}

function calcRandom() {

    const numRandom = (Math.floor(Math.random() * (4-1+1)+1))
    return numRandom
}

// let numeroRandom = calcRandom()



