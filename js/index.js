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

    var qtdJogos=document.getElementById("quantidadeJogos").value
    var jogo = []
    var mega = []
    
       for (let i = 1; i < qtdJogos + 1; i++) {
        if (jogofinal(jogo).length <= 5) {
          i--
          var jogo = []
          } else
          
          
          var jogo = []
        }

        document.getElementById("texto_area_mega").innerText=(mega)
  }




