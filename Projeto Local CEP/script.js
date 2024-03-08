const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const ddd = document.getElementById("ddd");
const complemento = document.getElementById("complemento");

cep.addEventListener("blur", () => {
    let localidade = cep.value;
    if (localidade.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${localidade}/json/`)
        .then(response => response.json())
        .then(json => {
            logradouro.value = json.logradouro;
            cidade.value = json.localidade;
            bairro.value = json.bairro;
            ddd.value = json.ddd;
            complemento.value = json.complemento;
        });


});



function enviar() {
    if(cep.value === "") {
        alert("Por favor, insira os dados corretamente!!!")
    }
    else {
        alert("dados enviados com sucesso!!")
    }

    }
    