// Script para botón Ver/Ocultar lista de libros y filtro
document.getElementById('ver-lista-btn').addEventListener('click', function(){
    var tablaLibros = document.getElementById('tabla-libros');

    if(tablaLibros.style.display === 'none'){
        tablaLibros.style.display = 'table';  // 'table' en lugar de 'tabla'
        this.textContent = 'Ocultar lista';
    } else {
        tablaLibros.style.display = 'none';
        this.textContent = 'Ver Libros';
    }

    var btnFiltro = document.getElementById('btn_filtro');

    if(btnFiltro.style.display === 'none'){
        btnFiltro.style.display = 'block';
    } else {
        btnFiltro.style.display = 'none';
    }

    ajustarTablaLibros(); // Ajusta la tabla según tus necesidades
});
// Script para mostrar/ocultar formulario de búsqueda
document.getElementById('mostrar-formulario-btn').addEventListener('click', function() {
    var formularioBusqueda = document.getElementById('form-busqueda');
    if (formularioBusqueda.style.display === 'none') {
        formularioBusqueda.style.display = 'block';  // Mostrar formulario de búsqueda
        this.textContent = 'Ocultar filtro';
    } else {
        formularioBusqueda.style.display = 'none';   // Ocultar formulario de búsqueda
        this.textContent = 'Mostrar filtro';
    }
});

// Script de búsqueda de libros
document.getElementById('form-busqueda').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var titulo = document.getElementById('titulo').value.trim().toLowerCase();
    var autor = document.getElementById('autor').value.trim().toLowerCase();

    // Filtrar la tabla de libros
    var libros = document.querySelectorAll('#tabla-libros tbody tr');
    libros.forEach(function(libro) {
        var tituloLibro = libro.querySelector('td:nth-child(2)').textContent.trim().toLowerCase();
        var autorLibro = libro.querySelector('td:nth-child(5)').textContent.trim().toLowerCase();
        
        // Mostrar/ocultar libros según el filtro
        if (tituloLibro.includes(titulo) && autorLibro.includes(autor)) {
            libro.style.display = '';  // Mostrar fila del libro
        } else {
            libro.style.display = 'none';  // Ocultar fila del libro
        }
    });

    // Ajustar tamaño de la tabla de libros después de filtrar
    ajustarTablaLibros();
});

// Script para limpiar formulario de búsqueda
document.getElementById('limpiar-formulario-btn').addEventListener('click', function() {
    // Limpiar los valores del formulario
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    
    // Mostrar todas las filas de la tabla de libros
    var libros = document.querySelectorAll('#tabla-libros tbody tr');
    libros.forEach(function(libro) {
        libro.style.display = '';  // Mostrar fila del libro
    });

    // Ajustar tamaño de la tabla de libros después de limpiar
    ajustarTablaLibros();
});

// Función para ajustar tamaño de la tabla de libros
function ajustarTablaLibros() {
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

// Script para botón Ver/Ocultar lista de autores
document.getElementById('ver-lista-autores-btn').addEventListener('click', function(){
    var tablaAutores = document.getElementById('tabla-Autor');  // Asegúrate de usar el ID correcto aquí
    if(tablaAutores.style.display === 'none'){
        tablaAutores.style.display = 'table';  // Mostrar tabla de autores
        this.textContent = 'Ocultar Autores';  // Cambiar texto del botón a 'Ocultar Autores'
    } else {
        tablaAutores.style.display = 'none';   // Ocultar tabla de autores
        this.textContent = 'Ver Autores';      // Cambiar texto del botón a 'Ver Autores'
    }
});

