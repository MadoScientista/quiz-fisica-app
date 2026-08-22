
const formularioContacto = document.getElementById("formularioContacto")


formularioContacto.addEventListener("submit", e => {
    e.preventDefault()
    
    const datos = new FormData(formularioContacto)
    console.log(datos.get("nombreUsuario"))
    console.log(datos.get("correoUsuario"))
    console.log(datos.get("motivoUsuario"))
    console.log(datos.get("mensajeUsuario"))
})
