document.addEventListener('DOMContentLoaded', function () {
    var verListaAutoresBtn = document.getElementById('ver-lista-autores-btn');
    var tablaAutor = document.getElementById('tabla-Autor');

    verListaAutoresBtn.addEventListener('click', function () {
        if (tablaAutor.style.display === 'none' || tablaAutor.style.display === '') {
            tablaAutor.style.display = 'table';
        } else {
            tablaAutor.style.display = 'none';
        }
    });
});
