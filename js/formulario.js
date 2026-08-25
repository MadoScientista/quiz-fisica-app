
// Elementos del formulario
const formularioContacto = document.getElementById("formularioContacto")
const nombreEnviado = document.getElementById("nombre-enviado")
const correoEnviado = document.getElementById("correo-enviado")
const motivoEnviado = document.getElementById("motivo-enviado")
const mensajeEnviado = document.getElementById("mensaje-enviado")

// Elemento modal
const formularioModal = new bootstrap.Modal(document.getElementById("exampleModal"))



formularioContacto.addEventListener("submit", e => {
    e.preventDefault()
    
    const datos = new FormData(formularioContacto)
    //const datosJson = Object.fromEntries(datos.entries())

    // Integra los valores del json
    nombreEnviado.textContent = datos.get("nombreUsuario")
    correoEnviado.textContent = datos.get("correoUsuario")
    motivoEnviado.textContent = datos.get("motivoUsuario")
    mensajeEnviado.textContent = datos.get("mensajeUsuario")

    // Lanza el modal
    formularioModal.show()
    
})

