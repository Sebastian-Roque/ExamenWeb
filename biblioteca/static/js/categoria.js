// Función para remover tildes de los caracteres
function quitarTildes(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

document.addEventListener('DOMContentLoaded', function() {
    const mostrarFiltroBtn = document.querySelector('#form-container button.btn-primary');
    const formBusqueda = document.querySelector('#form-busqueda');
    const nombreInput = document.querySelector('#nombre');
    const submitBtn = document.querySelector('#submit-busqueda-btn');
    const limpiarBtn = document.querySelector('#limpiar-formulario-btn');
    const tablaCategorias = document.querySelector('#tabla-categorias');

    mostrarFiltroBtn.addEventListener('click', function() {
        if (formBusqueda.style.display === 'none' || formBusqueda.style.display === '') {
            formBusqueda.style.display = 'block';
            mostrarFiltroBtn.textContent = 'Ocultar filtro';
        } else {
            formBusqueda.style.display = 'none';
            mostrarFiltroBtn.textContent = 'Mostrar filtro';
        }
    });

    function filtrarTabla() {
        const filtroNombre = quitarTildes(nombreInput.value.trim().toLowerCase()); // Convertir a minúsculas y quitar tildes
        let encontrado = false;

        tablaCategorias.querySelectorAll('tbody tr').forEach(function(fila) {
            const nombreFila = quitarTildes(fila.querySelector('td:nth-child(2)').textContent.trim().toLowerCase()); // Convertir a minúsculas y quitar tildes

            if (nombreFila.includes(filtroNombre)) {
                fila.style.display = '';
                encontrado = true;
            } else {
                fila.style.display = 'none';
            }
        });

        // Mostrar SweetAlert si no se encontró ninguna categoría
        if (!encontrado) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La categoría buscada no se encuentra en la lista.',
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });
        }
    }

    formBusqueda.addEventListener('submit', function(event) {
        event.preventDefault();
        filtrarTabla();
    });

    limpiarBtn.addEventListener('click', function() {
        nombreInput.value = '';
        filtrarTabla();
    });
});
