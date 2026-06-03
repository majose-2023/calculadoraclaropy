let carrito = [];

renderPlanes("internet");

document
.querySelectorAll(".menu button")
.forEach(btn => {

    btn.addEventListener("click", () => {

        renderPlanes(
            btn.dataset.categoria
        );

    });

});

function agregarPlan(id){

    let producto;

    Object.values(productos)
    .forEach(categoria => {

        categoria.forEach(item => {

            if(item.id === id){
                producto = item;
            }

        });

    });

    carrito.push(producto);

    actualizarResumen();

}

function actualizarResumen(){

    const lista =
        document.getElementById("seleccionados");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach(item => {

        total += item.precio;

        lista.innerHTML += `
            <div class="item-resumen">
                ${item.nombre}
            </div>
        `;

    });

    document.getElementById("total")
    .innerText =
        "₲" +
        total.toLocaleString("es-PY");

}

document
.getElementById("whatsapp")
.addEventListener("click", () => {

    let mensaje =
        "Hola, me interesa:%0A%0A";

    carrito.forEach(item => {

        mensaje +=
            "- " + item.nombre + "%0A";

    });

    window.open(
        `https://wa.me/595994856756?text=${mensaje}`
    );

});