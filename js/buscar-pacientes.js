var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        //status Ok
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);//objeto
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else {
            //console.log(xhr.status);
            //console.log(xhr.responseText);
            alert("Erro ao buscar pacientes...");
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});