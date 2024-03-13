const btnAgregar = document.getElementById("btnAgregar");

const contenedorLista = document.getElementById("contenedorLista");
const producto = document.getElementById("nombreProducto");

btnAgregar.addEventListener('click', agregarProductos);

console.log(producto.value)
function agregarProductos(e) {
    e.preventDefault();
    let listaProducto = document.createElement("p");
    listaProducto.textContent = producto.values;

    console.log(listaProducto)
    console.log(producto.value)
    contenedorLista.appendChild(listaProducto);
}






