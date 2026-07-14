
const results = document.getElementById("results");

document.getElementById("btnPatent").addEventListener("click", searchByPatent);

function cleanData() {
    results.replaceChildren();
}

async function searchByPatent() {

    const patentValue = document.getElementById("patent").value;
    console.log('patentee', patentValue)

    const response = await fetch(`http://localhost:3000/auto?patente=${patentValue}`);

    const data = await response.json();


    mostrarAuto(data, results)
}

// retorna el automóvil con patente <string> y los datos de su conductor (si existe).
function renderObjects(obj, container = results) {

    if (container === results) {
        results.replaceChildren()
    }

    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === "object" && value !== null) {
            const title = document.createElement("p");
            title.textContent = `${key}:`;
            container.appendChild(title);

            const block = document.createElement("div");
            block.style.marginLeft = "1rem";
            container.appendChild(block);

            renderObjects(value, block);
        } else {
            const line = document.createElement("p");
            line.textContent = `${key}: ${value}`;
            container.appendChild(line);
        }
    });














    // const card = document.createElement("div");

    // const brand = document.createElement("p");
    // brand.textContent = `Marca: ${data.auto.marca}`;

    // const patent = document.createElement("p");
    // patent.textContent = `Patente: ${data.auto.patente}`;

    // const driver = document.createElement("p");

    // driver.textContent = `Conductor: ${data.conductor ? data.conductor.nombre : "No existe"}`;

    // card.append(
    //     brand,
    //     patent,
    //     driver
    // );

    // results.appendChild(card);
}