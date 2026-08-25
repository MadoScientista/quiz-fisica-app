// ========================================
// ESTADO DEL QUIZ
// ========================================


let preguntaActual = -1
let puntaje = 0
let correctas = 0
let tiempoMaximo = 30
let tiempoRestante = tiempoMaximo
let temporizador
let enQuiz


// ========================================
// ELEMENTOS DEL DOM
// ========================================

// Elementos descripción del quiz
const descripcionQuiz = document.getElementById("descripcion-quiz")

// Elementos quiz
const preguntaContainer = document.getElementById("pregunta-container")
const enunciado = document.getElementById("enunciado")
const imagenPregunta = document.getElementById("imagen-pregunta")
const imagenContainer = document.getElementById("imagen-container")
const alternativas = document.getElementById("alternativas")
const btnResponder = document.getElementById("btn-responder")

// Elementos info quiz
const preguntaNumero = document.getElementById("pregunta-numero")
const puntajeElemento = document.getElementById("puntaje")
const tiempoElemento = document.getElementById("tiempo")
const barraProgreso = document.getElementById("barraProgreso")

// Elementos inicio Quiz
const inicioQuizContainer = document.getElementById("inicio-quiz-container")
const btnIniciar = document.getElementById("btn-iniciar")

// Elementos resultados del quiz
const resultadoContainer = document.getElementById("resultado-container")
const resultadoPuntaje = document.getElementById("resultado-puntaje")
const resultadoCorrectas = document.getElementById("resultado-correctas")
const resultadoIncorrectas = document.getElementById("resultado-incorrectas")
const btnReiniciar = document.getElementById("btn-reiniciar")



// Descripción del quiz
function actualizarDescripciónQuiz(){
    descripcionQuiz.textContent = preguntas.length + " Preguntas de alternativas donde solo una de ellas es correcta"
}

// Iniciar quiz
function iniciarQuiz(){

    preguntaActual = 0
    puntaje = 0
    tiempoRestante = tiempoMaximo

    inicioQuizContainer.classList.add("d-none")
    resultadoContainer.classList.add("d-none")
    preguntaContainer.classList.remove("d-none")

    actualizarQuizInfo()
    iniciarTemporizador()
    mostrarPregunta()
    
}

// Temporizador
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

// Mostrar preguntas
function mostrarPregunta() {

    // Obtener la pregunta actual
    const pregunta = preguntas[preguntaActual]

    // Desmarcar la alternativa seleccionada en la pregunta anterior
    const seleccionada = document.querySelector('input[name="respuesta"]:checked')
    if (seleccionada) {
        seleccionada.checked = false
    }
    
    // Mostrar enunciado
    enunciado.textContent = pregunta.enunciado

    
    if(pregunta.imagen != ""){
        imagenPregunta.src = pregunta.imagen
        imagenPregunta.classList.remove("d-none")
    }else{
        imagenPregunta.classList.add("d-none")
    }

    
    // Generar las cuatro alternativas
    
    pregunta.alternativas.forEach((alternativa, indice) =>{
        
        document.getElementById("label-alternativa-" + indice).textContent = alternativa

    })
}

// Actualizar tarjeta info quiz
function actualizarQuizInfo(){
    
    // Actualizar número de pregunta
    preguntaNumero.innerHTML = (preguntaActual+1) + " de " + preguntas.length

    // Actualizar respuesta correcta
    puntajeElemento.innerHTML = "puntaje: " + puntaje
    
    // Actualizar barra de progreso
    barraProgreso.style = `width: ${Math.round(((preguntaActual+1)/preguntas.length)*100)}%`
}

// Comprobar respuestas
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
        puntaje += 10
        correctas++
    }
    
    
    siguientePregunta()
}

// Siguiente pregunta
function siguientePregunta() {
    
    // Incrementar preguntaActual
    preguntaActual++
    
    // Comprobar si quedan preguntas
    if(preguntaActual < preguntas.length){
        actualizarQuizInfo()
        mostrarPregunta()
        iniciarTemporizador()
    }else{

        finalizarQuiz()
    }
}

// Finalizar quiz
function finalizarQuiz() {
    // Detener temporizador
    clearInterval(temporizador)

    preguntaContainer.classList.add("d-none")
    resultadoContainer.classList.remove("d-none")

    resultadoPuntaje.textContent = "Puntaje: " + puntaje
    resultadoCorrectas.textContent = "Correctas: " + correctas
    resultadoIncorrectas.textContent = "Correctas: " + (preguntas.length - correctas)
    

    if(correctas == preguntas.length){

    }

}



// Acciones
btnResponder.addEventListener("click", comprobarRespuesta);
btnIniciar.addEventListener("click", iniciarQuiz)
btnReiniciar.addEventListener("click", iniciarQuiz)


actualizarDescripciónQuiz()
actualizarQuizInfo()