var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#msg-erro");
    mensagensErro.innerHTML = "";
})

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    //var btn = <button type="submit"><i class="far fa-trash-alt"></i></button>;

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    //pacienteTr.appendChild(montaTd(btn, "acoes"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome == "" || paciente.nome == null || paciente.nome.length == 0) {
        erros.push("Nome não pode ser vazio!");
    }
    if (paciente.peso == "" || paciente.peso == null) {
        erros.push("Peso não pode ser vazio!");
    }
    if (paciente.altura == "" || paciente.altura == null) {
        erros.push("Altura não pode ser vazio!");
    }
    if (paciente.gordura == "" || paciente.gordura == null) {
        erros.push("Gordura não pode ser vazio!");
    }
    if (!validaAltura) {
        erros.push("Valor de altura inválido!");
    }
    if (!validaPeso) {
        erros.push("Valor de peso inválido!");
    }
    return erros;
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 600) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    }
    return false;
}

function exibeMensagensDeErro(erros) {
    var msgErro = document.querySelector("#msg-erro");

    msgErro.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        msgErro.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}