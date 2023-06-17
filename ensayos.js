//CHECKBOX LIST DE PATOLOGÍAS
// Selecciona el elemento HTML donde se mostrarán las patologías
const pathologyList = document.getElementById("pathology-list");
const loading = document.getElementById("loading");

// Hace una solicitud a la API usando fetch()
fetch(
    // "https://app.dev.jikkenlab.com/apis/datacolector/datacolector/patologiesToShow",
    // "https://localhost:7269/datacolector/patologiesToShow",
    "https://datacolector.azurewebsites.net/datacolector/patologiesToShow",
    {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    }
)
    .then((response) => response.json()) // Convierte la respuesta en formato JSON
    .then((data) => {
        // Recorre los datos de las patologías y los agrega a la lista
        data.forEach((pathology) => {
            const div = document.createElement("div");
            const input = document.createElement("input");
            input.classList.add("form-check-input");
            input.classList.add("me-1");
            const label = document.createElement("label");
            label.style.display = "inline";

            input.type = "checkbox";
            input.name = pathology.name;
            input.value = pathology.snomedId;
            label.textContent = pathology.description;
            label.setAttribute("for", `patologia${pathology.id}`);

            div.classList.add("form__item");
            div.appendChild(input);
            div.appendChild(label);

            pathologyList.appendChild(div);
        });
    })
    .catch((error) => {
        console.error("Error al obtener las patologías:", error);
    });

//BUSQUEDA DE OTRAS PATOLOGÍAS
const searchInput = document.querySelector(".patologiainput");
const select = document.querySelector(".patologiasearch");
const optionElem = document.createElement("option");
optionElem.value = "0";
optionElem.text = "Seleccionar patología...";
select.appendChild(optionElem);

searchInput.addEventListener("input", async (event) => {
    cleanOptions();
    select.value = "0";
    select.disabled = true;
    const searchTerm = event.target.value;
    if (searchTerm.length > 2) {
        const options = await searchOptions(searchTerm);
        updateOptions(options);
        select.disabled = false;
        loading.textContent = "";
    }
    // } else {
    //     cleanOptions();
    //     select.value = "0";
    //     select.disabled = true;
    // }
});

const fechaNacimientoInput = document.getElementById("fecha-nacimiento");

fechaNacimientoInput.addEventListener("input", function () {
    const fechaNacimiento = new Date(this.value);
    const fechaInicio = new Date("1923-12-31");
    const fechaFin = new Date();

    fechaFin.setFullYear(fechaFin.getFullYear() + 1);

    if (fechaNacimiento < fechaInicio || fechaNacimiento > fechaFin) {
        document.getElementById("status-message").textContent =
            "La fecha de nacimiento no es válida.";
    } else {
        document.getElementById("status-message").textContent = "";
    }
});

async function searchOptions(searchTerm) {
    loading.textContent = "Cargando...";
    const response = await fetch(
        // `https://app.dev.jikkenlab.com/apis/datacolector/datacolector/patologiesByTermQuery?searchText=${searchTerm}`
        // `https://localhost:7269/datacolector/patologiesByTermQuery?searchText=${searchTerm}`
        `https://datacolector.azurewebsites.net/datacolector/patologiesByTermQuery?searchText=${searchTerm}`
    );
    const data = await response.json();
    return data;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateOptions(options) {
    options.forEach((option) => {
        const optionElem = document.createElement("option");
        optionElem.value = option.id;
        optionElem.text = capitalizeFirstLetter(option.description);
        select.appendChild(optionElem);
    });
}

function cleanOptions() {
    for (let i = select.options.length - 1; i > 0; i--) {
        if (select.options[i].value !== 0) select.options[i].remove();
    }
}

var telephone = document.getElementById("telephone");

telephone.addEventListener("input", function () {
    var numbers = this.value.replace(/\D/g, "");
    var char = { 0: "(", 3: ") ", 6: "-" };
    var formatted = "";
    for (var i = 0; i < numbers.length; i++) {
        formatted += (char[i] || "") + numbers[i];
        if (i >= 9) break;
    }
    this.value = formatted;
});

select.addEventListener("change", (event) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.classList.add("form-check-input");
    input.classList.add("me-1");
    const label = document.createElement("label");
    label.style.display = "inline";
    const option = event.target.options[event.target.selectedIndex];

    input.type = "checkbox";
    input.name = event.target.name;
    input.value = event.target.value;
    input.checked = true;
    label.textContent = capitalizeFirstLetter(option.text);
    label.setAttribute("for", `patologia${option.value}`);

    div.classList.add("form__item");
    div.appendChild(input);
    div.appendChild(label);

    pathologyList.appendChild(div);

    // cleanOptions();
    searchInput.value = "";
    select.value = "0";
    select.disabled = true;
});

async function submitForm(event) {
    event.preventDefault(); // evitar envío síncrono del formulario

    // obtener valores de los campos del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const dni = document.querySelector('input[name="dni"]').value;
    const fechaNacimiento = document.querySelector(
        'input[name="fecha-nacimiento"]'
    ).value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // Obtener todos los elementos input chequeados dentro de pathologyList
    const checkedInputs = pathologyList.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    // Crear una lista de valores
    const values = [];
    checkedInputs.forEach((input) => {
        values.push(input.value);
    });

    document.querySelector("form").reset();
}

async function submitForm(event) {
    event.preventDefault(); // evitar envío síncrono del formulario
    document.getElementById("status-message").textContent =
        "Procesando datos...";
    // obtener valores de los campos del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const dni = document.querySelector('input[name="dni"]').value;
    const fechaNacimiento = document.querySelector(
        'input[name="fecha-nacimiento"]'
    ).value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // Obtener todos los elementos input chequeados dentro de pathologyList
    const checkedInputs = pathologyList.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    // Crear una lista de valores
    const values = [];
    checkedInputs.forEach((input) => {
        values.push(input.value);
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (values.length === 0) {
        document.getElementById("status-message").textContent =
            "Debe seleccionar al menos una patología.";
        return;
    } else if (
        !nombre ||
        !apellido ||
        !dni ||
        !fechaNacimiento ||
        !telefono ||
        !email
    ) {
        document.getElementById("status-message").textContent =
            "Debe completar todos los campos.";
        return;
    } else if (email && !emailRegex.test(email)) {
        document.getElementById("status-message").textContent =
            "El email no tiene un formato válido.";
        return;
    }

    // crear objeto con los datos a enviar
    const data = {
        firstName: nombre,
        lastName: apellido,
        birthday: fechaNacimiento,
        patologySnomedIds: values,
        telephone: telefono,
        email: email,
        dni: dni,
    };

    // enviar los datos al servidor mediante una solicitud POST
    fetch(
        // "https://app.dev.jikkenlab.com/apis/datacolector/datacolector/potentialpatients",
        // "https://localhost:7269/datacolector/potentialpatients",
        "https://datacolector.azurewebsites.net/datacolector/potentialpatients",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    )
        .then((respuesta) => {
            if (respuesta.ok) {
                document.getElementById("status-message").textContent =
                    "¡Los datos se enviaron correctamente! Gracias por participar.";
                document.querySelector("form").reset();
            } else if (respuesta.status === 400) {
                respuesta.json().then((error) => {
                    let errorMessage = "Uno o más campos contienen errores<ul>";
                    for (const field in error.errors) {
                        for (const message of error.errors[field]) {
                            errorMessage += `<li>${message}</li>`;
                        }
                    }
                    errorMessage += "</ul>";
                    document.getElementById("status-message").innerHTML =
                        errorMessage;
                });
            } else {
                document.getElementById("status-message").textContent =
                    "¡Hubo un error al enviar los datos! Por favor, inténtalo de nuevo.";
            }
        })
        .catch((error) => {
            document.getElementById("status-message").textContent =
                "¡Hubo un error al enviar los datos! Por favor, inténtalo de nuevo.";
        });
}
