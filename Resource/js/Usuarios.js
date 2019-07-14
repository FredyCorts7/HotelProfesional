class Usuarios {
    constructor() {}

    iniciarSesion(user, pass) {
        $.post(
            URL + 'Login/iniciarSesion',
            {user, pass},
            res => {
                console.log(res)
                try {
                    var item = JSON.parse(res)
                    if (item.idcliente >  0) {
                        localStorage.setItem('user', res)
                        window.location.href = URL + 'Index/index'
                    } else {
                        toastr.error('Credenciales incorrectas', 'Algo ha salido mal')
                    }
                } catch (error) {
                    toastr.error(res, 'Algo ha salido mal')
                }
            }
        )
    }

    datosUsuario(urlActual) {
        let btnIniciarSesion = document.getElementById('btnIniciarSesion')
        let btnCerrarSesion = document.getElementById('btnCerrarSesion')
        if (PATHNAME == urlActual) {
            localStorage.removeItem('user')
            if (btnIniciarSesion && btnCerrarSesion) {
                btnIniciarSesion.style.display = 'none'
                btnCerrarSesion.style.display = 'block'
            }
        } else if (localStorage.getItem('user') != null) {
            let user = JSON.parse(localStorage.getItem('user'))
            if (user.idcliente > 0) {
                if (btnIniciarSesion && btnCerrarSesion) {
                    btnIniciarSesion.style.display = 'none'
                    btnCerrarSesion.style.display = 'block'
                }
            }
        } else if (localStorage.getItem('user') == null && btnIniciarSesion && btnCerrarSesion) {
            btnIniciarSesion.style.display = 'block'
            btnCerrarSesion.style.display = 'none'
        }
    }
}