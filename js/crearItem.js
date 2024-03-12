const idProductos = document.querySelectorAll(".idProducto");
const contenedorInput = document.querySelectorAll(".producto");
const btnAgregar = document.getElementById("btnAgregar");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedorOriginal = document.getElementById("contenedorInput");
const contenedorPadre = document.getElementById("contenedorPadre");

const arreglo = [...contenedorInput];

btnAgregar.addEventListener('click', function() {
    
    let nuevoContenedor = Array.from(contenedorOriginal.children).map(function(contenedor) {
        return contenedor.cloneNode(true);
    })
    
    nuevoContenedor.forEach(function(contenedor) {
        contenedorPadre.insertBefore(contenedor, contenedorOriginal);
    })
    
    idProductos.forEach(function(producto,indice) {
        producto.value = parseInt(producto.value) + 1;
    })
    
    for(let clave in arreglo) {
        if(clave == 1 || clave == 2)
        arreglo[clave].value = "";
    }
});

btnSiguiente.addEventListener('click', function() {

    
});




 




