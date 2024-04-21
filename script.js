import { cargarInformacion }from './utils.js'
const render = async () => {
    try{
        const productos = await cargarInformacion();
        const productosContainer = document.getElementById('productos');
        const carrito = document.getElementById('carrito');
        let contadorProductos=0;

        productos.forEach(prodcuto => {
            const productoCard = document.createElement('div');
            productoCard.classList.add('box-gallery');

            const imagen = new Image();
            imagen.src = prodcuto.image;
            imagen.classList.add('product-image');

            const nombreProducto = document.createElement('p');
            nombreProducto.textContent = prodcuto.name;
            nombreProducto.classList.add('nombre-producto');

            const precioProducto = document.createElement('p');
            precioProducto.textContent = `$${prodcuto.price}`;
            precioProducto.classList.add('precio-producto'); 


            const Agregar = document.createElement('button');
            Agregar.textContent = 'Añadir al carrito';
            Agregar.addEventListener('click' , () => {
                contadorProductos++;
                carrito.textContent = contadorProductos;
            });
            productoCard.appendChild(imagen);
            productoCard.appendChild(nombreProducto);
            productoCard.appendChild(precioProducto);
            productoCard.appendChild(Agregar);

            productosContainer.appendChild(productoCard);
        });

    }catch (error) {
        console.error('Error al cargar la información:', error);

    };
} ;
document.addEventListener("DOMContentLoaded", render);
