const time = document.querySelector("#time");
const link = document.querySelector("#link");
const lista = document.querySelector("#lista");
const confirmar = document.querySelector("#button");
var DADOS = [];

const url = "https://times-uefa.herokuapp.com/api/champions";

function pegarDados() {
  let input = document.querySelector("#Pesquisar");
  let clube = input.value;
  console.log(clube);

  var req = fetch(url);

  var res = req.then(function (res) {
    return res.json();
  });

  res.then(function (dados) {
    for (var i = 0; i < dados.length; i++) {
      if (clube == dados[i].time) {
        time.innerHTML = dados[i].time + " " + dados[i].país;
        link.innerHTML = dados[i].link;
        break;
      }
      if (clube != dados[i].time) {
        time.innerHTML = "Clube não encontrado";
        link.innerHTML = "";
      }
      if (clube == "") {
        time.innerHTML = "Campo pesquisa em branco";
      }
    }
  });
  input.value = "";
}

confirmar.addEventListener("click", pegarDados);
