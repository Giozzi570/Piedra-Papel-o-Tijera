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
const resultado = document.getElementById("resultado")
let user;
let maquina;
let arrayButtons = [papel,tijeras,piedra]
const opciones = ["Piedra", "Papel", "Tijeras"];
const numeroAleatorio = () =>{
    numero = Math.random() * 10000
    console.log(numero)
}
elegirAleatorio = (array) =>{
    const indice = Math.floor(Math.random() * array.length);
    console.log(indice)
    return array[indice];
}
const juegoCompleto = () => {
    piedra.addEventListener("click", () => {
        const opciones = ["piedra", "papel", "tijeras"];
        maquina = elegirAleatorio(opciones);
        numeroAleatorio()
        user = "piedra"
        verificarImagenUser(),eliminateElementValueUser(),setTimeout(verificarImagenMaquina(),2000),verificarPuntaje()
        document.getElementById("reiniciar").classList.toggle("hidden");
    })
    papel.addEventListener("click", () => {
        const opciones = ["piedra", "papel", "tijeras"];
        maquina = elegirAleatorio(opciones);
        numeroAleatorio()
        user = "papel"
        verificarImagenUser(),eliminateElementValueUser(),setTimeout(verificarImagenMaquina(),2000),verificarPuntaje()
        document.getElementById("reiniciar").classList.toggle("hidden");
    })
    tijeras.addEventListener("click", () => {
        const opciones = ["piedra", "papel", "tijeras"];
        maquina = elegirAleatorio(opciones);
        numeroAleatorio()
        user = "tijeras"
        verificarImagenUser(),eliminateElementValueUser(),setTimeout(verificarImagenMaquina(),2000),verificarPuntaje()
        document.getElementById("reiniciar").classList.remove("hidden");
    })
}
iniciarJuego.addEventListener("click", () => {
    iniciarJuego.style.display = "none"
    juego.style.display = "flex"
    juegoCompleto()
})
const eliminateElementValueUser = () =>{
    valueUser.style.display = "none"
}

const verificarImagenUser = () => {
    switch (user){
        case "piedra":
            userValue.setAttribute("src","static/piedra.png")
            break
        case "papel":
            userValue.setAttribute("src","static/papel.png")
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
            break
        case "papel":
            maquinaValue.setAttribute("src","static/papel.png")
            break
        case "tijeras":
            maquinaValue.setAttribute("src","static/tijeras.png")
            break
    }

}
const verificarPuntaje = () => {
    if (maquina == user){
        document.getElementById("tieMessage").classList.toggle("hidden")
    }
    else{
        if(maquina == "piedra" & user == "tijeras"){
            document.getElementById("loseMessage").classList.toggle("hidden")
        }
        else if(maquina == "papel" & user == "piedra"){
            document.getElementById("loseMessage").classList.toggle("hidden")
        }
        else if(maquina == "tijeras" & user == "papel"){
            document.getElementById("loseMessage").classList.toggle("hidden")
        }
        else if(maquina == "piedra" & user == "papel"){
            document.getElementById("winMessage").classList.toggle("hidden")
        }
        else if(maquina == "papel" & user == "tijeras"){
            document.getElementById("winMessage").classList.toggle("hidden")
        }
        else if(maquina == "tijeras" & user == "piedra"){
            document.getElementById("winMessage").classList.toggle("hidden")
        }
    }
}

document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("reiniciar").addEventListener("click", () => {
    iniciarJuego.style.display = "flex"
    juego.style.display = "none"
    juegoCompleto()
});

document.getElementById('reiniciar').addEventListener('click', function(){
    maquinaValue.setAttribute("src","")
    userValue.setAttribute("src","")
    document.getElementById("tieMessage").classList.add("hidden")
    document.getElementById("loseMessage").classList.add("hidden")
    document.getElementById("winMessage").classList.add("hidden")
    document.getElementById('reiniciar').classList.add("hidden")
    valueUser.style.display = "flex"
})
