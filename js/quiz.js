// ========================================
// ESTADO DEL QUIZ
// ========================================


let preguntaActual = 0
let puntaje = 0
let tiempoMaximo = 30
let tiempoRestante = tiempoMaximo
let temporizador
let enQuiz


// ========================================
// ELEMENTOS DEL DOM
// ========================================

const enunciado = document.getElementById("enunciado")
const imagenPregunta = document.getElementById("imagen-pregunta")
const imagenContainer = document.getElementById("imagen-container")
const alternativas = document.getElementById("alternativas")

const preguntaNumero = document.getElementById("pregunta-numero")
const puntajeElemento = document.getElementById("puntaje")
const tiempoElemento = document.getElementById("tiempo")
const barraProgreso = document.getElementById("barraProgreso")

const btnResponder = document.getElementById("btn-responder")
const btnReiniciar = document.getElementById("btn-reiniciar")

const preguntaContainer = document.getElementById("pregunta-container")
const resultado = document.getElementById("resultado")

const resultadoPuntaje = document.getElementById("resultado-puntaje")
const resultadoCorrectas = document.getElementById("resultado-correctas")
const resultadoIncorrectas = document.getElementById("resultado-incorrectas")


// ========================================
// QUIZ
// ========================================

function iniciarQuiz(){

    
}


// ========================================
// MOSTRAR PREGUNTA
// ========================================

function mostrarPregunta() {

    // Obtener la pregunta actual
    const pregunta = preguntas[preguntaActual]
    
    // Mostrar enunciado
    enunciado.textContent = pregunta.enunciado

    
    if(pregunta.imagen != ""){
        imagenPregunta.style.width = "200px"
        imagenPregunta.style.height = "auto"
        imagenPregunta.src = pregunta.imagen
        imagenPregunta.classList.remove("d-none")
    }else{
        imagenPregunta.classList.add("d-none")
    }

    
    // Limpiar la sección de alternativas
    alternativas.innerHTML = ""

    // Generar las cuatro alternativas
    pregunta.alternativas.forEach((alternativa, indice) =>{
        
        const divAlternativas = document.createElement("div")
        divAlternativas.classList.add("form-check", "mb-2")

        const inputAlternativa = document.createElement("input")
        inputAlternativa.classList.add("form-check-input")
        inputAlternativa.type = "radio"
        inputAlternativa.name = "respuesta"
        inputAlternativa.id = "alternativa-" + indice
        inputAlternativa.value = indice

        const labelAlternativa = document.createElement("label")
        labelAlternativa.classList.add("form-check-label")
        labelAlternativa.htmlFor = "alternativa-" + indice
        labelAlternativa.textContent = alternativa

        divAlternativas.appendChild(inputAlternativa)
        divAlternativas.appendChild(labelAlternativa)

        alternativas.appendChild(divAlternativas)

    })

    actualizarQuizInfo()
}

// ========================================
// Actualizar quiz info
// ========================================

function actualizarQuizInfo(){
    
    // Actualizar número de pregunta
    preguntaNumero.innerHTML = (preguntaActual+1) + " de " + preguntas.length

    // Actualizar respuesta correcta
    puntajeElemento.innerHTML = "Correctas: " + puntaje
    
    // Actualizar barra de progreso
    barraProgreso.style = `width: ${Math.round(((preguntaActual+1)/preguntas.length)*100)}%`
}


// ========================================
// COMPROBAR RESPUESTA
// ========================================

function comprobarRespuesta() {
    // Obtener respuesta seleccionada
    const respuesta = document.querySelector(
        'input[name="respuesta"]:checked'
    )

    if (!respuesta) {
        return
    }

    // Comparar con la respuesta correcta
    if(Number(respuesta.value) === preguntas[preguntaActual].correcta){
        puntaje++
    }
    
    siguientePregunta()
}


// ========================================
// SIGUIENTE PREGUNTA
// ========================================

function siguientePregunta() {
    
    // Incrementar preguntaActual
    preguntaActual++

    // Comprobar si quedan preguntas
    if(preguntaActual < preguntas.length){
        mostrarPregunta()
        iniciarTemporizador()
    }else{

    }
}


// ========================================
// TEMPORIZADOR
// ========================================

function iniciarTemporizador() {
    
    clearInterval(temporizador)
    tiempoRestante = tiempoMaximo

    tiempoElemento.textContent = tiempoRestante

    temporizador = setInterval(() =>{
        tiempoRestante--
        tiempoElemento.textContent = tiempoRestante

        if(tiempoRestante <= 0){

            if(preguntaActual < preguntas.length){
                clearInterval(temporizador)
                siguientePregunta()
            }else{
                clearInterval(temporizador)
                finalizarQuiz()
            }
        }}, 1000)
}



// ========================================
// FINALIZAR QUIZ
// ========================================

function finalizarQuiz() {
    // Detener temporizador
    clearInterval(temporizador)
    // Ocultar pregunta

    // Mostrar resultado

    // Mostrar puntaje

    // Mostrar respuestas correctas e incorrectas
}


// ========================================
// REINICIAR QUIZ
// ========================================

function reiniciarQuiz() {
    // Restablecer estado

    // Mostrar nuevamente las preguntas

    // Ocultar resultado

    // Reiniciar temporizador
}


// ========================================
// EVENTOS
// ========================================

btnResponder.addEventListener("click", comprobarRespuesta);

btnReiniciar.addEventListener("click", reiniciarQuiz);


// ========================================
// INICIAR QUIZ
// ========================================

iniciarTemporizador();
mostrarPregunta();

