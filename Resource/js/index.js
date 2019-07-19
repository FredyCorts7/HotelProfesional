//configuraciones
    toastr.options.preventDuplicates = true


var mostrarContrasena = () => {
    let pass = document.getElementById('txtPassword')
    let checkPass = document.getElementById('checkPassword')
    checkPass.checked ? pass.setAttribute('type', 'text') : pass.setAttribute('type', 'password')
}

var usuarios = new Usuarios()
var registrar = new Registrar()
var reserve = new Reserve()

$().ready(() => {
    let urlActual = window.location.pathname
    usuarios.datosUsuario(urlActual)
    if (urlActual == PATHNAME + 'Index/reserve') reserve.fillTbodyReserve()


//--------------------------------codigo para dar responsive a las tablas-------------------------------------------
    // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
    $('.table-responsive-stack').find("th").each(function (i) {
        $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
        $('.table-responsive-stack-thead').hide();
    });

    $( '.table-responsive-stack' ).each(function() {
        var thCount = $(this).find("th").length; 
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);   
    });
        
    function flexTable(){
        if ($(window).width() < 768) {
            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").show();
                $(this).find('thead').hide();
            });    
        // window is less than 768px   
        } else {
            $(".table-responsive-stack").each(function (i) {
                $(this).find(".table-responsive-stack-thead").hide();
                $(this).find('thead').show();
            });    
        }
        // flextable   
    }      
    
    flexTable();
    
    window.onresize = function(event) {
        flexTable();
    };
//--------------------------------FIN de codigo para dar responsive a las tablas---------------------------------------
})

var loadData = (idRoom) => {
    reserve.loadData(idRoom)
}

var obtenerTipoDocumentos = () => {
    usuarios.obtenerTipoDocumentos()
}

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
    if (validarNombre(cliName) && validarNombre(cliLastname) && validarTipoDoc(cliTipoDoc) && validarDocumento(cliDoc) && validarUbicacion(cliLocation) && validarCorreo(cliEmail) && validarUsuario(cliUser) && validarContrasena(cliPass)) 
        registrar.registrarCliente(cliName.value, cliLastname.value, cliTipoDoc.value, cliDoc.value, cliLocation.value, cliEmail.value, cliUser.value, cliPass.value)
}