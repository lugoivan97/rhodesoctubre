// Datos de las hamburguesas
const hamburguesas = [
    {
        nombre: "Hamburguesa Clásica",
        precio: 1500,
        descripcion: "Carne del toro marco, queso cheddar, lechuga, tomate y salsa especial.",
        imagen: "../img/clasicabroma.jpg"
    },
    {
        nombre: "Hamburguesa BBQ",
        precio: 1800,
        descripcion: "Carne del toro marco, queso cheddar, cebolla caramelizada, bacon y salsa BBQ.",
        imagen: "../img/imaginacionbroma.jpg"
    },
    {
        nombre: "Hamburguesa Veggie",
        precio: 1600,
        descripcion: "Carne del toro marco vegetal, queso vegano, lechuga, tomate y paltita.",
        imagen: "../img/imaginacionbroma.jpg"
    },
    {
        nombre: "Hamburguesa Rhodes",
        precio: 1700,
        descripcion: "Carne del toro marco, oro en fetas, queso oro, lechuga oro y salsa picante oro.",
        imagen: "../img/imaginacionbroma.jpg"
    }
];

// Vector para almacenar los productos del carrito
let carrito = [];

// Función para mostrar las hamburguesas
function mostrarHamburguesas() {
    const seccionCentral = document.querySelector('.section-central');
    seccionCentral.innerHTML = '<h2>Menú de Hamburguesas</h2>'; // Limpiar el contenido actual

    hamburguesas.forEach((hamburguesa, index) => {
        const divHamburguesa = document.createElement('div');
        divHamburguesa.classList.add('hamburguesa');

        divHamburguesa.innerHTML = `
            <img src="${hamburguesa.imagen}" alt="${hamburguesa.nombre}" class="imagen-hamburguesa">
            <div>
                <h3>${hamburguesa.nombre}</h3>
                <p>${hamburguesa.descripcion}</p>
                <p>Precio: $${hamburguesa.precio}</p>
                <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
            </div>
        `;

        seccionCentral.appendChild(divHamburguesa);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(index) {
    const hamburguesaSeleccionada = hamburguesas[index];
    carrito.push(hamburguesaSeleccionada);
    alert(`${hamburguesaSeleccionada.nombre} ha sido agregada al carrito.`);
}

// Función para enviar el pedido por WhatsApp
function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "Pedido de hamburguesas:%0A";
    carrito.forEach((item, index) => {
        mensaje += `${index + 1}. ${item.nombre} - $${item.precio}%0A`;
    });

    const urlWhatsApp = `https://wa.me/?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
}

// Mostrar las hamburguesas al cargar la página
mostrarHamburguesas();

// Lógica del menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
