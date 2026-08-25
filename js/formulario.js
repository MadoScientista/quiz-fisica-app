
const formularioContacto = document.getElementById("formularioContacto")
const formularioEnviadoContenedor = document.getElementById("formulario-enviado-contenedor")
const nombreEnviado = document.getElementById("nombre-enviado")
const correoEnviado = document.getElementById("correo-enviado")
const motivoEnviado = document.getElementById("motivo-enviado")
const mensajeEnviado = document.getElementById("mensaje-enviado")

formularioContacto.addEventListener("submit", e => {
    e.preventDefault()
    
    const datos = new FormData(formularioContacto)
    const datosJson = Object.fromEntries(datos.entries())

    formularioEnviadoContenedor.classList.remove("d-none")
    
    nombreEnviado.textContent = datos.get("nombreUsuario")
    correoEnviado.textContent = datos.get("correoUsuario")
    motivoEnviado.textContent = datos.get("motivoUsuario")
    mensajeEnviado.textContent = datos.get("mensajeUsuario")

    formularioEnviadoContenedor.scrollIntoView()
})

formularioEnviadoContenedor.classList.add("d-none")
