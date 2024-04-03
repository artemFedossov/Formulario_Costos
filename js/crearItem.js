// Selección de los elementos del DOM
const btnAgregar = document.querySelector("#formulario");
const btnGenerar = document.querySelector("#btnGenerar");
const btnCambioColor = document.querySelector("#btnColor");

const contenedorLista = document.querySelector("#contenedorLista");
const producto = document.querySelector("#nombreProducto");
const cantidadProducto = document.querySelector("#cantidadProducto");
const unidadProducto = document.querySelector("#unidadProducto");
const valorProducto = document.querySelector("#valorProducto");
const cantidadComprada = document.querySelector("#cantidadComprada");
const contenedorFormulario = document.querySelector("#formulario")
const colorLS = localStorage.getItem("modoColor");

// Agrega eventos a los botones
btnAgregar.addEventListener("submit", agregarProductos);
btnGenerar.addEventListener("click", calcular);

// Definición de la función constructora Producto
function Producto(producto, cantidadProducto, unidadProducto, valorProducto, cantidadComprada) {
    this.producto = producto;
    this.cantidadProducto = cantidadProducto;
    this.unidadProducto = unidadProducto;
    this.valorProducto = valorProducto;
    this.cantidadComprada = cantidadComprada;
}

// Array en donde se almacenan los objetos Producto
let productos = [];

// Función que agrega elementos al contenedor dinamico y ademas los almacena en un array
function agregarProductos(e) {
    e.preventDefault();

    // Crea el elemento ul y ademas le agrega una clase
    let listaProducto = document.createElement("ul");
    listaProducto.classList.add("contenedorLista");

    // Verifica que la cantidad utilizada no sea mayor a la cantidad comprada
    if(parseInt(cantidadProducto.value) <= parseInt(cantidadComprada.value)){
        let nuevoProducto = new Producto(producto.value, cantidadProducto.value, unidadProducto.value, valorProducto.value, cantidadComprada.value);
        productos.push(nuevoProducto);
        
        // Inserta los elementos en una lista, para luego mostrarlos
        listaProducto.innerHTML = `<li class="lista">Producto: ${producto.value} </li>
                                   <li class="lista">se utilizaron ${cantidadProducto.value}</li>
                                   <li class="lista"> ${unidadProducto.value}</li>
                                   <li class="lista">se compro por $${valorProducto.value}</li>`;
        
        // Agrega la lista al contenedor   
        contenedorLista.appendChild(listaProducto);
        btnAgregar.reset();
    } else {
        alert("Su unidad utilizada no puede ser mayor a la comprada, corrijalo");
    }
}

// Función para calcular el costo total
function calcular() {
    
    // Verifica que haya elementos agregados en la lista para calcular el costo
    if(productos.length != 0){
        let contenedorCosto = document.createElement("div");
        let costo = 0;
        
        // Recorre el array de productos para calcular el costo total
        productos.forEach(function(producto) {
            if (producto.unidadProducto === "unidades") {
                costo += (parseInt(producto.cantidadProducto) * parseInt(producto.valorProducto)) * parseInt(producto.cantidadComprada);
            } else {
                costo += (parseInt(producto.cantidadProducto) * parseInt(producto.valorProducto)) / parseInt(producto.cantidadComprada);    
            }
        })
    
        // Inserta en el HTML el elemento mostrando el costo
        contenedorCosto.innerHTML = `<p class="lista">su costo es de <span class="costo">$${costo}</span></p>`
        contenedorFormulario.appendChild(contenedorCosto);
    } else {
        alert("Primero Ingrese un producto para poder calcular el costo");
    }
}

// Se fija en el local storage cual fue el ultimo color utilizado
if(colorLS === "celeste"){
    document.querySelector('main').classList.add("cambioColor");
}

// Evento sobre el boton que cambia el color del main 
btnCambioColor.addEventListener("click", () => {
    document.querySelector('main').classList.toggle("cambioColor");

    if(document.querySelector('main').classList.contains("cambioColor")){
        localStorage.setItem("modoColor", "celeste");
    } else {
        localStorage.setItem("modoColor", "rosa");
    }
})

