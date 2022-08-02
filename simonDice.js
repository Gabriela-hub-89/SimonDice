

let ronda = 0
let rondas = []
let rondaJuego = []
let rondaUsuario = []


document.querySelector('#empezar').onclick = empezarJuego



function empezarJuego() {

    ronda++




    // numeroRandom()
    resaltarCuadro(numeroRandom(), capturarCuadros())
    
}


function resaltarCuadro(numeroRandom, cuadros) {
    
    console.log(numeroRandom)

    for (const cuadro in cuadros) {
        if(numeroRandom === Number(cuadros[cuadro].innerText)) {
            console.log(cuadros[cuadro])
            cuadros[cuadro].style.opacity = 1
        }
    }
    
}

function numeroRandom() {

    const numRandom = (Math.floor(Math.random() * (4-1+1)+1))
    return numRandom
}

function capturarCuadros() {

    const amarillo = document.querySelector('#cuadro-uno')
    const rojo = document.querySelector('#cuadro-dos')
    const verde = document.querySelector('#cuadro-tres')
    const azul = document.querySelector('#cuadro-cuatro')



    let cuadros = {
        cuadroAmarillo : amarillo,
        cuadroRojo : rojo,
        cuadroVerde : verde,
        cuadroAzul : azul
    }
    return cuadros

}





