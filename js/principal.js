var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var title = document.querySelector("title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc;
});

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (Math.pow(altura, 2));

    return imc.toFixed(2);
}