const iniciarJuego = document.getElementById("iniciarJuego")
const juego = document.getElementById("juego")
const piedra = document.getElementById("piedraUser")
const tijeras = document.getElementById("tijerasUser")
const papel = document.getElementById("papelUser")
const body = document.querySelector("body")
const userValue = document.getElementById("userValue")
const elementos = document.querySelectorAll("#piedraUser, #papelUser, #tijerasUser");
const valueUser = document.getElementById("valueUser")
const maquinaValue = document.getElementById("maquinaValue")
let user;
let maquina;
let arrayButtons = [papel,tijeras,piedra]
const numeroAleatorio = () =>{
    numero = Math.random() * 10000
    console.log(numero)
}
elegirAleatorio = (array) =>{
    const indice = Math.floor(Math.random() * array.length);
    console.log(indice)
    return array[indice];
}
iniciarJuego.addEventListener("click", () => {
    iniciarJuego.style.display = "none"
    juego.style.display = "flex"
})
const eliminateElementValueUser = () =>{
    valueUser.style.display = "none"
}
piedra.addEventListener("click", () => {
    const opciones = ["Piedra", "Papel", "Tijeras"];
    maquina = elegirAleatorio(opciones);
    numeroAleatorio()
    user = "piedra"
    verificarImagenUser()
    eliminateElementValueUser()
    setTimeout(verificarImagenMaquina(),2000)
})
papel.addEventListener("click", () => {
    const opciones = ["Piedra", "Papel", "Tijeras"];
    maquina = elegirAleatorio(opciones);
    numeroAleatorio()
    user = "papel"
    verificarImagenUser()
    eliminateElementValueUser()
    setTimeout(verificarImagenMaquina(),2000)
})
tijeras.addEventListener("click", () => {
    const opciones = ["piedra", "papel", "tijeras"];
    maquina = elegirAleatorio(opciones);
    numeroAleatorio()
    user = "tijeras"
    verificarImagenUser()
    eliminateElementValueUser()
    setTimeout(verificarImagenMaquina(),2000)
})

const verificarImagenUser = () => {
    switch (user){
        case "piedra":
            userValue.setAttribute("src","static/piedra.png")
            console.log("piedra")
            break
        case "papel":
            userValue.setAttribute("src","static/papel.png")
            console.log("papel")
            break
        case "tijeras":
            userValue.setAttribute("src","static/tijeras.png")
            break
    }

}
const verificarImagenMaquina = () => {
    switch (maquina){
        case "piedra":
            maquinaValue.setAttribute("src","static/piedra.png")
            console.log("piedra")
            break
        case "papel":
            maquinaValue.setAttribute("src","static/papel.png")
            console.log("papel")
            break
        case "tijeras":
            maquinaValue.setAttribute("src","static/tijeras.png")
            break
    }

}
