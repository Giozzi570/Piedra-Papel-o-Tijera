const iniciarJuego = document.getElementById("iniciarJuego")
const juego = document.getElementById("juego")
const piedra = document.getElementById("piedraUser")
const tijeras = document.getElementById("tijerasUser")
const papel = document.getElementById("papelUser")
const ruleta = document.getElementById("ruleta")
const body = document.querySelector("body")


const numeroAleatorio = () =>{
    numero = Math.random() * 10000
    console.log(numero)
}


iniciarJuego.addEventListener("click", () => {
    iniciarJuego.style.display = "none"
    juego.style.display = "flex"
})

piedra.addEventListener("click", () => {
    ruleta.style.transition = "transform 1s ease-in-out"
    numeroAleatorio()
    ruleta.style.transform = `rotate(${numero}deg)`
    
})
papel.addEventListener("click", () => {
    ruleta.style.transition = "transform 1s ease-in-out"
    numeroAleatorio()
    ruleta.style.transform = `rotate(${numero}deg)`
})
tijeras.addEventListener("click", () => {
    ruleta.style.transition = "transform 1s ease-in-out"
    numeroAleatorio()
    ruleta.style.transform = `rotate(${numero}deg)`
})






