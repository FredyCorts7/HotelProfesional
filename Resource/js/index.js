//configuraciones
    toastr.options.preventDuplicates = true


var mostrarContrasena = () => {
    let pass = document.getElementById('txtPassword')
    let checkPass = document.getElementById('checkPassword')
    checkPass.checked ? pass.setAttribute('type', 'text') : pass.setAttribute('type', 'password')
}

var usuarios = new Usuarios()
var clientes = new Clientes()

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
    if (validarNombre(cliName) && validarNombre(cliLastname) && validarDocumento(cliDoc) && validarCorreo(cliEmail) && validarUsuario(cliUser) && validarContrasena(cliPass)) 
        clientes.registrarCliente(cliName.value, cliLastname.value, cliTipoDoc.value, cliDoc.value, cliLocation.value, cliEmail.value, cliUser.value, cliPass.value)
}