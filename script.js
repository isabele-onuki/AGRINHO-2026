// Script simples para a calculadora
function calcular() {
    var area = document.getElementById('area').value;
    if(area > 0) {
        // Simulacao: 1 hectare com tecnologia economiza 200.000 litros de agua
        var economia = area * 200000;
        document.getElementById('resultado').innerText = 
            "Você economizaria: " + economia.toLocaleString() + " litros de água!";
    } else {
        alert("Por favor, digite uma área válida.");
    }
}