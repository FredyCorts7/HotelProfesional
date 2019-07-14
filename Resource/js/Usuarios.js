class Usuarios {
    constructor() {

    }

    iniciarSesion(user, pass) {
        //toastr.success('user: ' + user, 'Entre al iniciar sesión')
        $.post(
            URL + 'Login/iniciarSesion',
            {user, pass},
            res => {
                console.log(res)
                try {
                    var item = JSON.parse(res)
                    if (item.idcliente >  0) {
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
}