//configuraciones
    toastr.options.preventDuplicates = true
    
//---------------
var user = document.getElementById('txtUser')
var pass = document.getElementById('txtPassword')
var checkPass = document.getElementById('checkPassword')

var usuarios = new Usuarios();

var validar = () => {    
    if (validarUsuario(user) && validarContrasena(pass)) {
        usuarios.iniciarSesion(user.value, pass.value)
    }
}

var mostrarContrasena = () => {
    checkPass.checked ? pass.setAttribute('type', 'text') : pass.setAttribute('type', 'password')
}