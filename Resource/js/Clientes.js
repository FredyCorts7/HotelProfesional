class Clientes {
    constructor() {}

    registrarCliente(cliName, cliLastname, cliTipoDoc, cliDoc, cliLocation, cliEmail, cliUser, cliPass) {
        $.post(
            URL + 'Registrar/registrarCliente',
            {cliName, cliLastname, cliTipoDoc, cliDoc, cliLocation, cliEmail, cliUser, cliPass},
            res => {
                console.log(res)
            }
        )
    }
}