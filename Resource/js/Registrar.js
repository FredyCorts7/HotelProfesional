class Registrar {
    constructor() {}

    registrarCliente(cliName, cliLastname, cliTipoDoc, cliDoc, cliLocation, cliEmail, cliUser, cliPass) {
        var data = new FormData()
        data.append('cliName', cliName)
        data.append('cliLastname', cliLastname)
        data.append('cliTipoDoc', cliTipoDoc)
        data.append('cliDoc', cliDoc)
        data.append('cliLocation', cliLocation)
        data.append('cliEmail', cliEmail)
        data.append('cliUser', cliUser)
        data.append('cliPass', cliPass)
        $.post(
            URL + 'Registrar/registrarCliente',
            data,
            res => {
                console.log(res)
                if (res == 0) toastr.success('Se ha completado con éxito', 'Registrado')
                else toastr.error(res, 'Algo ha salido mal')
            }
        )
    }

    registrarEmpleado() {
        
    }
}