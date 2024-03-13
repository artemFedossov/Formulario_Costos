const idProductos = document.querySelectorAll(".idProducto");
const contenedorInput = document.querySelectorAll(".producto");

const btnAgregar = document.getElementById("btnAgregar");
const btnSiguiente = document.getElementById("btnSiguiente");

const contenedorOriginal = document.getElementById("contenedorInput");
const contenedorPadre = document.getElementById("contenedorPadre");

const arreglo = [...contenedorInput];

function Productos(id, producto, cantidad, unidad) {
    this.id = id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.unidad = unidad;
}

let aux = [];
let listaProductos = [];
let producto;

btnAgregar.addEventListener('click', function() {
    
    contenedorInput.forEach((elemento) => {
        
        let x = elemento.value
        aux.push(x);
        console.log("variable" +aux)
    })
    
    producto = new Productos(aux[0], aux[1], aux[2], aux[3])
    
    listaProductos.push(producto);

    console.log(listaProductos)

    let nuevoContenedor = Array.from(contenedorOriginal.children).map(function(contenedor) {
        return contenedor.cloneNode(true);
    })
    
    nuevoContenedor.forEach(function(contenedor) {
        contenedorPadre.insertBefore(contenedor, contenedorOriginal);
    })
    
    idProductos.forEach(function(producto) {
        producto.value = parseInt(producto.value) + 1;
    })
    
    for(let clave in arreglo) {
        if(clave == 1 || clave == 2)
        arreglo[clave].value = "";
    }
    
});

btnSiguiente.addEventListener('click', function() {
    
    
});






