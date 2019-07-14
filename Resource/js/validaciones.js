var validarNombre = name => {
    if (name.value == '') {
        toastr.warning('Debes ingresar tus nombres', 'Tener en cuenta')
        name.focus()
        return false
    } else if (name.value.length < 4) {
        toastr.warning('Tus nombres deben contener mas de 3 caracteres', 'Tener en cuenta')
        name.focus()
        return false
    } else if (name.value.length > 20) {
        toastr.warning('Tus nombres deben contener menos de 21 caracteres', 'Tener en cuenta')
        name.focus()
        return false
    } else if (!/^[A-Z]+$/i.test(name.value)) {
        toastr.warning('Tus nombres solo deben contener letras', 'Tener en cuenta')
        name.focus()
        return false
    }
    return true
}

var validarDocumento = doc => {
    if (doc.value == '') {
        toastr.warning('Debes ingresar tu documento', 'Tener en cuenta')
        doc.focus()
        return false
    } else if (doc.value.length < 5) {
        toastr.warning('Tu documento debe contener mas de 4 caracteres', 'Tener en cuenta')
        doc.focus()
        return false
    } else if (doc.value.length > 15) {
        toastr.warning('Tu documento debe contener menos de 16 caracteres', 'Tener en cuenta')
        doc.focus()
        return false
    } else if (isNaN(doc.value)) {
        toastr.warning('Tu documento solo debe contener números', 'Tener en cuenta')
        doc.focus()
        return false
    }
    return true
}

var validarCorreo = email => {
    if (email.value == '') {
        toastr.warning('Debes ingresar tu correo electrónico', 'Tener en cuenta')
        email.focus()
        return false
    } else if (email.value > 25) {
        toastr.warning('Tu correo electrónico debe contener menos de 26 caracteres', 'Tener en cuenta')
        email.focus()
        return false
    } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)) {
        toastr.warning('Tu correo electrónico debe cumplir con la estructura correcta', 'Tener en cuenta')
        email.focus()
        return false
    }
    return true
}

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