let clientes = [];

// Agregar un cliente
function agregarCliente(nombre, cantidadPrestamo, interes) {
    const cliente = {
        nombre: nombre,
        cantidadPrestamo: cantidadPrestamo,
        interes: interes
    };
    clientes.push(cliente);
}

// Cliente por nombre
function buscarCliente(nombre) {
    let encontrado = null;
    let i = 0;
    do {
        if (clientes[i].nombre === nombre) {
            encontrado = clientes[i];
            break;
        }
        i++;
    } while (i < clientes.length);
    return encontrado;
}

// Interés total del préstamo
function calcularInteresTotal(cliente) {
    return cliente.cantidadPrestamo * cliente.interes / 100;
}

// Resultado del cálculo
function mostrarResultado(cliente, interesTotal) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    if (cliente) {
        resultadoElement.innerHTML += `<li>Nombre: ${cliente.nombre}</li>`;
        resultadoElement.innerHTML += `<li>Cantidad de Préstamo: ${cliente.cantidadPrestamo}</li>`;
        resultadoElement.innerHTML += `<li>Interés (%): ${cliente.interes}</li>`;
        resultadoElement.innerHTML += `<li>Interés Total: ${interesTotal}</li>`;
    } else {
        resultadoElement.innerHTML += `<li>No se encontró el cliente.</li>`;
    }
}

// Calcular el préstamo
function calcularPrestamo() {
    const nombre = document.getElementById("nombre").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const interes = parseFloat(document.getElementById("interes").value);

    if (nombre.trim() === "" || isNaN(cantidad) || isNaN(interes) || cantidad <= 0 || interes <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    agregarCliente(nombre, cantidad, interes);
    const cliente = buscarCliente(nombre);
    const interesTotal = calcularInteresTotal(cliente);
    mostrarResultado(cliente, interesTotal);
}