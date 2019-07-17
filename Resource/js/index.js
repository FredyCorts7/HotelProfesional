//configuraciones
    toastr.options.preventDuplicates = true


var mostrarContrasena = () => {
    let pass = document.getElementById('txtPassword')
    let checkPass = document.getElementById('checkPassword')
    checkPass.checked ? pass.setAttribute('type', 'text') : pass.setAttribute('type', 'password')
}

var usuarios = new Usuarios()
var registrar = new Registrar()

$().ready(() => {
    let urlActual = window.location.pathname
    usuarios.datosUsuario(urlActual)
})

var obtenerTipoDocumentos = () => {
    usuarios.obtenerTipoDocumentos()
}

var validar = () => {
    let pass = document.getElementById('txtPassword')
    let user = document.getElementById('txtUser')
    if (validarUsuario(user) && validarContrasena(pass)) usuarios.iniciarSesion(user.value, pass.value)
}

var registrarCliente = () => {
    let cliName = document.getElementById('cliName')
    let cliLastname = document.getElementById('cliLastname')
    let cliTipoDoc = document.getElementById('cliTipoDoc')
    let cliDoc = document.getElementById('cliDoc')
    let cliLocation = document.getElementById('cliLocation')
    let cliEmail = document.getElementById('cliEmail')
    let cliUser = document.getElementById('cliUser')
    let cliPass = document.getElementById('cliPass')
    if (validarNombre(cliName) && validarNombre(cliLastname) && validarTipoDoc(cliTipoDoc) && validarDocumento(cliDoc) && validarUbicacion(cliLocation) && validarCorreo(cliEmail) && validarUsuario(cliUser) && validarContrasena(cliPass)) 
        registrar.registrarCliente(cliName.value, cliLastname.value, cliTipoDoc.value, cliDoc.value, cliLocation.value, cliEmail.value, cliUser.value, cliPass.value)
}