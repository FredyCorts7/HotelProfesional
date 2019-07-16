class Registrar {
    constructor() {}

    registrarCliente(cliName, cliLastname, cliTipoDoc, cliDoc, cliLocation, cliEmail, cliUser, cliPass) {
        $.post(
            URL + 'Registrar/registrarCliente',
            {cliName, cliLastname, cliTipoDoc, cliDoc, cliLocation, cliEmail, cliUser, cliPass},
            res => {
                //console.log(res)
                if (res == 0) toastr.success('Se ha completado con éxito', 'Registrado')
                else toastr.error(res, 'Algo ha salido mal')
            }
        )
    }

    registrarEmpleado(empName, empLastname, empUser, empPass, empTipo) {
        $.post(
            URL + 'Registrar/registrarEmpleado',
            {empName, empLastname, empUser, empPass, empTipo},
            res => {
                //console.log(res)
                if (res == 0) toastr.success('Se ha completado con éxito', 'Registrado')
                else toastr.error(res, 'Algo ha salido mal')
            }
        )
    }
}