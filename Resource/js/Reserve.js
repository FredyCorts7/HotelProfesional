class Reserve {
    constructor() {}

    fillTbodyReserve() {
        $.post(
            URL + 'Index/obtenerHabitaciones',
            {},
            res => {
                //console.log(res)
                try {
                    let item = JSON.parse(res)
                    let tr = ''
                    item.results.forEach(ele => {
                        tr += '<tr>'
                        tr += '<td><img class="img-fluid" src="http://localhost/HotelProfesional/Resource/img/img1.jpg"></img></td>'
                        tr += '<td>' + ele.numHabitacion + '</td><td>' + ele.tipo_habitacion + '</td>'
                        tr += '<td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum minus quo. Soluta quis nam similique dolores voluptates labore cumque, temporibus placeat! Beatae, voluptatum debitis dolores ab illo amet quo?</td>'
                        tr += '<td><button onclick="loadData(' + ele.idhabitaciones + ')" class="btn btn-block btn-info" data-toggle="modal" data-target=".bd-example-modal-lg">Reservar</button></td>'
                        tr += '</tr>'
                    });

                    $('#tbodyReserve').append(tr)
                } catch (error) {
                    toastr.error(res, 'Algo ha salido mal')
                }
            }
        )
    }

    loadData(idRoom) {
        $.post(
            URL + 'Index/obtenerHabitacion',
            {idRoom},
            res => {
                console.log(res)
                try {
                    let item = JSON.parse(res)
                    let resNumRoom = document.getElementById('resNumRoom')
                    let resTypeRoom = document.getElementById('resTypeRoom')

                    resNumRoom.innerHTML(item.results.numHabitacion)
                    resTypeRoom.innerHTML(item.results.tipo_habitacion)

                    toastr.success('Datos Obtenidos Correctamente', 'Proceso Satisfactorio')
                } catch (error) {
                    toastr.error(res, 'Algo ha salido mal')
                }
            }
        )
    }
}