const time = document.querySelector("#time");
const link = document.querySelector("#link");
const confirmar = document.querySelector("#button");

const url = "https://times-uefa.herokuapp.com/api/champions";

function pegarDados() {
  var input = document.querySelector("#Pesquisar");
  var clube = input.value;

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
      if(clube != dados[i].time)
      {
        time.innerHTML = "Clube não encontrado";
        link.innerHTML = "";
      }
      if(clube == ""){
        time.innerHTML = "Campo pesquisa em branco";
      }
    }
  });
}

confirmar.addEventListener("click", pegarDados);
