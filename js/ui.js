function renderPlanes(categoria){

    const contenedor =
        document.getElementById("planes");

    contenedor.innerHTML = "";

    productos[categoria].forEach(plan => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <div class="card-header">

                <h3>${plan.nombre}</h3>

                <div class="precio">
                    ₲${plan.precio.toLocaleString("es-PY")}
                </div>

            </div>

            <div class="card-body">

                <ul>
                    ${plan.beneficios
                        .map(b=>`<li>✓ ${b}</li>`)
                        .join("")}
                </ul>

            </div>

            <button onclick="agregarPlan(${plan.id})">
                Agregar
            </button>

        `;

        contenedor.appendChild(card);

    });

}