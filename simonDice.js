
const uno = document.querySelector('#cuadro-uno')
const dos = document.querySelector('#cuadro-dos')
const tres = document.querySelector('#cuadro-tres')
const cuatro = document.querySelector('#cuadro-cuatro')

let arrayRonda = []
let rondas = 0
let elemento;

document.querySelector('#empezar').onclick = function() {

    const cuadro = obtenerCuadroRandom(calcRandom(), capturarCuadros())
    guardarCuadroArray(cuadro)
    resaltarCuadroRandom(cuadro)
    cuadro.onclick = clickarCuadro()
    
}

function clickarCuadro(event) {
    let click
    if( event !== null) {
        console.log('hiciste click')
        click = event.target
    }
}

function obtenerCuadroRandom(random, cuadros) {
    
    for (const cuadro in cuadros) {
        
        if(Number(cuadros[cuadro].innerText) === random) {
            elemento = cuadros[cuadro]
            // console.log(random)
            // console.log(elemento)
        }


    }
    // elemento es el elemento html, el cuadro del cuadrado
    return elemento
}

function guardarCuadroArray(cuadro) {
    
    arrayRonda.push(cuadro)
    console.log(arrayRonda)
    return arrayRonda
    

}
// después hay que hacer que esta funcion se vaya ejecutando varias veces
// y qué por cada vez vaya agregando un nuevo cuadro seleccionado al array


function resaltarCuadroRandom() {

    let elemento = obtenerCuadroRandom()
    let tiempo = 1000
    
    elemento.style.opacity = 1

    setTimeout(() => {
        elemento.style.opacity = 0.5
        elemento.style.transition = 'opacity 0.5s'
    }, tiempo);
    
    
}


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



