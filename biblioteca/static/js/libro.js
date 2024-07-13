document.addEventListener("DOMContentLoaded", function() {
    var verListaBtn = document.getElementById("ver-lista-btn");
    var listaLibros = document.getElementById("tabla-libros");
    var formularioBusqueda = document.getElementById('form-busqueda');
    var toggleFormularioBtn = document.getElementById('toggle-formulario-btn');

    // Evento para mostrar u ocultar la lista de libros y el formulario de búsqueda
    verListaBtn.addEventListener("click", function() {
        if (listaLibros.style.display === "none") {
            listaLibros.style.display = "block";
            verListaBtn.innerHTML = "Ocultar Libros";
            toggleFormularioBtn.style.display = 'inline-block'; 
        } else {
            listaLibros.style.display = "none";
            verListaBtn.innerHTML = "Ver Libros";
            formularioBusqueda.style.display = 'none'; 
            toggleFormularioBtn.style.display = 'none'; 
            toggleFormularioBtn.textContent = 'Mostrar filtro'; 
        }
    });

    // Evento para mostrar u ocultar el formulario de búsqueda
    toggleFormularioBtn.addEventListener('click', function() {
        if (formularioBusqueda.style.display === 'none' || formularioBusqueda.style.display === '') {
            formularioBusqueda.style.display = 'block';
            toggleFormularioBtn.textContent = 'Ocultar filtro';
        } else {
            formularioBusqueda.style.display = 'none';
            toggleFormularioBtn.textContent = 'Mostrar filtro';
        }
    });

    // Evento para realizar la búsqueda al enviar el formulario
    document.getElementById('form-busqueda').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        var titulo = document.getElementById('titulo').value.trim().toLowerCase();
        var autor = document.getElementById('autor').value.trim().toLowerCase();
        var errors = [];

        // Validación del campo Título
        if (titulo !== '' && !/^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/.test(titulo)) {
            errors.push('El campo "Título" solo puede contener letras, números y espacios. vuelve intentarlo..!!!');
        }

        // Validación del campo Autor
        if (autor !== '' && !/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/.test(autor)) {
            errors.push('El campo "Autor" solo puede contener letras y espacios. vuelve intentarlo..!!!');
        }

        // Al menos uno de los campos debe estar lleno
        if (titulo === '' && autor === '') {
            errors.push('Debe completar al menos uno de los campos: "Título" o "Autor".');
        }

        // Mostrar errores si los hay
        if (errors.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errors.join('\n'),
                
            });
            return;  // Salir de la función si hay errores
        }

        // Filtrar la tabla
        var libros = document.querySelectorAll('#tabla-libros tbody tr');
        libros.forEach(function(libro) {
            var tituloLibro = libro.querySelector('td:nth-child(2)').textContent.trim().toLowerCase();
            var autorLibro = libro.querySelector('td:nth-child(5)').textContent.trim().toLowerCase();
            
            // Mostrar/ocultar libro según filtros
            if ((titulo === '' || tituloLibro.includes(titulo)) && (autor === '' || autorLibro.includes(autor))) {
                libro.style.display = '';  
            } else {
                libro.style.display = 'none';  
            }
        });

        // Ajustar tamaño de la tabla si necesario
        ajustarTabla();
    });

    // Evento para limpiar el formulario de búsqueda
    document.getElementById('limpiar-formulario-btn').addEventListener('click', function() {
        // Limpiar los valores del formulario
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        
        // Mostrar todas las filas de la tabla
        var libros = document.querySelectorAll('#tabla-libros tbody tr');
        libros.forEach(function(libro) {
            libro.style.display = '';  
        });

        ajustarTabla();
    });

    // Función para ajustar tamaño de la tabla (debes definirla según tus necesidades)
    function ajustarTabla() {
        // Mostrar la tabla para obtener su tamaño
        var tabla = document.getElementById('tabla-libros');
        tabla.style.visibility = 'hidden';
        tabla.style.display = 'table';

        // Forzar un reflow para asegurar que las dimensiones se actualicen correctamente
        tabla.offsetHeight;

        // Ocultar de nuevo la tabla y mostrar solo las filas visibles
        tabla.style.visibility = '';
        tabla.style.display = '';

        var filasVisibles = document.querySelectorAll('#tabla-libros tbody tr[style=""]');
        if (filasVisibles.length > 0) {
            // Calcular y aplicar altura máxima
            var alturaMaxima = Array.from(filasVisibles).reduce(function(max, fila) {
                return Math.max(max, fila.offsetHeight);
            }, 0);
            tabla.style.maxHeight = alturaMaxima + 'px';
        } else {
            // Si no hay filas visibles, no aplicar altura máxima
            tabla.style.maxHeight = '';
        }
    }
});
