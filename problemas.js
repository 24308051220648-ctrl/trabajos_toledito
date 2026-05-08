function calcularAgua(){

    let metros =
    parseFloat(document.getElementById("metros").value);

    let total = metros * 12;

    document.getElementById("resultadoAgua").innerHTML =
    "Pago total: $" + total;
}


function calcularLuz(){

    let kw =
    parseFloat(document.getElementById("kw").value);

    let total = kw * 5;

    document.getElementById("resultadoLuz").innerHTML =
    "Pago de luz: $" + total;
}