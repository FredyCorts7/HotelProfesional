class Usuarios {
    constructor() {}

    iniciarSesion(user, pass) {
        $.post(
            URL + 'Login/iniciarSesion',
            {user, pass},
            res => {
                //console.log(res)
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

    obtenerTipoDocumentos() {
        var cliTipoDoc = document.getElementById('cliTipoDoc')
        let count = 1
        $.post(
            URL + 'Users/obtenerTipoDocumentos',
            {},
            res => {
                try {
                    var item = JSON.parse(res)
                    console.log(item)
                    cliTipoDoc.options[0] = new Option('Seleccione su tipo de documento ...', 0)
                    if (item.results.length > 0) {
                        for (let i = 0; i < item.results.length ; i++) {
                            cliTipoDoc.options[count] = new Option(item.results[i].Descripcion, item.results[i].idtipo_documento)
                            count++
                        }
                    }
                } catch (error) {
                    toastr.error(res, 'Algo ha salido mal')
                }
            }
        )
    }

    reestablecer() {
        this.obtenerTipoDocumentos()
    }

    datosUsuario(urlActual) {
        let btnIniciarSesion = document.getElementById('btnIniciarSesion')
        let btnCerrarSesion = document.getElementById('btnCerrarSesion')
        if (PATHNAME == urlActual) {
            localStorage.removeItem('user')
            if (btnIniciarSesion && btnCerrarSesion) {
                btnIniciarSesion.style.display = 'block'
                btnCerrarSesion.style.display = 'none'
            }
        } else if (localStorage.getItem('user') != null) {
            let user = JSON.parse(localStorage.getItem('user'))
            if (user.idcliente > 0) {
                if (btnIniciarSesion && btnCerrarSesion) {
                    btnIniciarSesion.style.display = 'none'
                    btnCerrarSesion.style.display = 'block'
                    btnCerrarSesion.innerHTML = "cierra sesión, " + user.nombre
                }
            }
        } else if (localStorage.getItem('user') == null && btnIniciarSesion && btnCerrarSesion) {
            btnIniciarSesion.style.display = 'block'
            btnCerrarSesion.style.display = 'none'
        }
    }
}