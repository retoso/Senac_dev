function enviarnome(){
    let nome = document.getElementById("nome").value
    if (nome % 2 == 0){
       alert(" este numero " + nome +" par")
    } else 
    alert(" este numero " + nome +" impar")
   }


    function faixaetaria(){
      var faixaetaria=document.getElementById("idade").value
      if (faixaetaria >= 18){
         var maiormenor = "Voce e de maior"
      } else 
         maiormenor = "Voce e menor"
      document.getElementById("texto_area").innerText=(maiormenor)
  }

  function megasena(){
   

var qtdJogos=document.getElementById("idade").value
var jogo = []


function jogofinal() {
  for (let i = 1; i <= 6; i++) {
    jogo.push(Math.floor(Math.random() * 60) + 1)
    jogo.sort()
  }
  var tmp = [];
  for (var i = 0; i < jogo.length; i++) {
    if (tmp.indexOf(jogo[i]) == -1) {
      tmp.push(jogo[i]);
    }
  }
  return tmp;
}


console.log("\n..............................................................." +
  "\n\n   *** Sistema gerador de numeros aleatório Mega Sena ***  \n" +
  "............................................................... \n")
qtdJogos = parseInt(prompt("Por favor, queira informar a quantidade de jogos que deseja :"))


for (let i = 1; i < qtdJogos + 1; i++) {
  if (jogofinal(jogo).length <= 5) {
    i--
    var jogo = []
  } else
    console.log("\nJogo numero " + i +
      " - " + jogo +
      "\n")
  var jogo = []
}
   
  }




