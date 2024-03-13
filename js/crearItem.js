const btnAgregar = document.querySelector("#formulario");
const btnGenerar = document.querySelector("#btnGenerar");

const contenedorLista = document.querySelector("#contenedorLista");
const producto = document.querySelector("#nombreProducto");
const cantidadProducto = document.querySelector("#cantidadProducto");
const unidadProducto = document.querySelector("#unidadProducto");
const valorProducto = document.querySelector("#valorProducto");
const cantidadComprada = document.querySelector("#cantidadComprada");

btnAgregar.addEventListener("submit", agregarProductos);
btnGenerar.addEventListener("click", calcular);

function Producto(producto, cantidadProducto, unidadProducto, valorProducto, cantidadComprada) {
    this.producto = producto;
    this.cantidadProducto = cantidadProducto;
    this.unidadProducto = unidadProducto;
    this.valorProducto = valorProducto;
    this.cantidadComprada = cantidadComprada;
}

let productos = [];

function agregarProductos(e) {
    e.preventDefault();
    let listaProducto = document.createElement("ul");
    let nuevoProducto = new Producto(producto.value, cantidadProducto.value, unidadProducto.value, valorProducto.value, cantidadComprada.value);
    productos.push(nuevoProducto)
    
    listaProducto.innerHTML = `<li>${producto.value}</li>
                               <li>${cantidadProducto.value}</li>
                               <li>${unidadProducto.value}</li>
                               <li>${valorProducto.value}</li>
                               <li>${cantidadComprada.value}</li>
                               <li>${unidadProducto.value}</li>`;
    
    contenedorLista.appendChild(listaProducto);
}

function calcular() {

    let costo;
    productos.forEach(function(producto) {
        console.log(producto.cantidadProducto)
        costo = (parseInt(producto.cantidadProducto) * parseInt(producto.valorProducto)) / parseInt(producto.cantidadComprada);
    })
    console.log(costo);
}


