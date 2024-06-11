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

    var imc = peso / (Math.pow(altura, 2));

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2);
});