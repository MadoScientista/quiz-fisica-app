// ========================================
// ESTADO DEL QUIZ
// ========================================

let preguntaActual = 0
let puntaje = 0
let tiempoRestante = 30
let temporizador
let enQuiz
const pregunta = {}


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
const progreso = document.getElementById("progreso")

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
    enunciado.textContent = pregunta
    
    // Mostrar u ocultar imagen

    // Generar las cuatro alternativas
    // El formato de las alternativas es el siguiente
    // <div class="form-check mb-2">
    //     <input class="form-check-input"
    //         type="radio"
    //         name="respuesta"
    //         id="alternativa-1"
    //         value="0">
    //     <label class="form-check-label"
    //         for="alternativa-1">
    //         Alternativa 1
    //     </label>
    // </div>


    // Actualizar número de pregunta

    // Actualizar barra de progreso
}


// ========================================
// OBTENER RESPUESTA
// ========================================

function obtenerRespuesta() {
    // Buscar la alternativa seleccionada

    // Retornar su valor
}


// ========================================
// COMPROBAR RESPUESTA
// ========================================

function comprobarRespuesta() {
    // Obtener respuesta seleccionada

    // Comparar con la respuesta correcta

    // Actualizar puntaje si corresponde
}


// ========================================
// SIGUIENTE PREGUNTA
// ========================================

function siguientePregunta() {
    // Incrementar preguntaActual

    // Comprobar si quedan preguntas

    // Mostrar siguiente pregunta
}


// ========================================
// TEMPORIZADOR
// ========================================

function iniciarTemporizador() {
    // Crear intervalo

    // Disminuir tiempo cada segundo

    // Actualizar contador

    // Finalizar quiz cuando llegue a cero
}


// ========================================
// FINALIZAR QUIZ
// ========================================

function finalizarQuiz() {
    // Detener temporizador

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

mostrarPregunta();
iniciarTemporizador();
