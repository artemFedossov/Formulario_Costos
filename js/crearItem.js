const btnAgregar = document.querySelector("#formulario");
const btnGenerar = document.querySelector("#btnGenerar");

const contenedorLista = document.querySelector("#contenedorLista");
const producto = document.querySelector("#nombreProducto");
const cantidadProducto = document.querySelector("#cantidadProducto");
const unidadProducto = document.querySelector("#unidadProducto");
const valorProducto = document.querySelector("#valorProducto");
const cantidadComprada = document.querySelector("#cantidadComprada");
const contenedorFormulario = document.querySelector("#formulario")

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
    listaProducto.classList.add("contenedorLista")
    let nuevoProducto = new Producto(producto.value, cantidadProducto.value, unidadProducto.value, valorProducto.value, cantidadComprada.value);
    productos.push(nuevoProducto)
    
    listaProducto.innerHTML = `<li class="lista">Producto: ${producto.value} </li>
                               <li class="lista"> se utilizaron ${cantidadProducto.value}</li>
                               <li class="lista"> ${unidadProducto.value}</li>
                               <li class="lista"> se compro por $${valorProducto.value}</li>`;
    
    contenedorLista.appendChild(listaProducto);
    btnAgregar.reset();
}

function calcular() {
    if(productos.length != 0){
        let contenedorCosto = document.createElement("div");
        let costo = 0;
        productos.forEach(function(producto) {
            if (producto.unidadProducto === "unidades") {
                costo += (parseInt(producto.cantidadProducto) * parseInt(producto.valorProducto)) * parseInt(producto.cantidadComprada);
            } else {
                costo += (parseInt(producto.cantidadProducto) * parseInt(producto.valorProducto)) / parseInt(producto.cantidadComprada);    
            }
        })
    
        contenedorCosto.innerHTML = `<p>${costo}</p>`
        contenedorFormulario.appendChild(contenedorCosto);
    } else {
        alert("Primero Ingrese un producto para poder calcular el costo");
    }
}


