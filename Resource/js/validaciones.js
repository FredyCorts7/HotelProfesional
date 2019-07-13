var validarUsuario = user => {
    if (user.value == '') {
        toastr.warning('Debes ingresar el usuario', 'Tener en cuenta')
        user.focus()
        return false
    } else if (user.value.length < 4) {
        toastr.warning('El usuario debe contener mas de 3 caracteres', 'Tener en cuenta')
        user.focus()
        return false
    } else if (user.value.length > 10) {
        toastr.warning('El usuario debe contener menos de 11 caracteres', 'Tener en cuenta')
        user.focus()
        return false
    }
    return true
}

var validarContrasena = pass => {
    if (pass.value == '') {
        toastr.warning('Debes ingresar la contraseña', 'Tener en cuenta')
        pass.focus()
        return false
    } else if (pass.value.length < 4) {
        toastr.warning('La contraseña debe contener mas de 3 caracteres', 'Tener en cuenta')
        pass.focus()
        return false
    } else if (pass.value.length > 10) {
        toastr.warning('La contraseña debe contener menos de 11 caracteres', 'Tener en cuenta')
        pass.focus()
        return false
    }
    return true
}