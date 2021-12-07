const time = document.querySelector("#time");
const link = document.querySelector("#link");
const lista = document.querySelector("#lista");
const confirmar = document.querySelector("#button");

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
        time.textContent = dados[i].time + " " + dados[i].país;
        // link.innerHTML = dados[i].link;

        var a = document.createElement("a");
        a.href = dados[i].link;
        a.textContent = dados[i].link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        link.appendChild(a);
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

// preenchimento automático
function preencheListaClube() {
  
  var req = fetch(url);

  var datalist = document.querySelector("#listaClub");

  req
    .then(function (res) {
      return res.json();
    })
    .then(function (dados) {
      // CLUBE.push(dados);
      for (i = 0; i < dados.length; i++) {
        
        //criando elemento opção pra jogar dentro do datalist
        var option = document.createElement("option");
        option.textContent = dados[i].time;
        datalist.appendChild(option);
      }
    });
}

confirmar.addEventListener("click", pegarDados);
preencheListaClube();
