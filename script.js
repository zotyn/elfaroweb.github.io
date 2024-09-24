// Reloj en tiempo real
function actualizarReloj() {
    const ahora = new Date();
    const tiempo = ahora.toLocaleTimeString();
    $('#reloj').text(tiempo);
}
setInterval(actualizarReloj, 1000);

// Agregar artículos dinámicamente
const formArticulos = $('#formArticulos');
const listaArticulos = $('#listaArticulos');
const contadorArticulos = $('#contadorArticulos');

formArticulos.on('submit', function (e) {
    e.preventDefault();
    const titulo = $('#titulo').val();
    const descripcion = $('#descripcion').val();

    const nuevaFila = `<tr><td><h1 class="titulo">${titulo}</h1><div class="descripcion"><p>${descripcion}</p></div></td></tr>`;
    listaArticulos.append(nuevaFila);

    $('#titulo').val('');
    $('#descripcion').val('');

    // Actualizar contador
    const totalArticulos = listaArticulos.find('tr').length;
    contadorArticulos.text(totalArticulos);

    // Añadir funcionalidad de desplegar
    añadirFuncionalidadDesplegar();
});

// Formulario de contacto
const formContacto = $('#formContacto');
formContacto.on('submit', function (e) {
    e.preventDefault();
    alert('Mensaje enviado con éxito');
    formContacto[0].reset();
});

// Función para mostrar/ocultar los artículos con jQuery (slideToggle)
function añadirFuncionalidadDesplegar() {
    $('.titulo').off('click').on('click', function () {
        $(this).next('.descripcion').stop(true, true).slideToggle(400);
    });
}

// Inicializar la funcionalidad para los artículos existentes
añadirFuncionalidadDesplegar();

// Función para mostrar/ocultar secciones enteras
$('.titulo-seccion').on('click', function () {
    $(this).next('section').stop(true, true).slideToggle(400);
});
