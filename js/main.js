$(document).ready(function(){
  //input
  var randomNmubers =[];
  var numeriUtente =[];
  var max = 100;
  var min = 1;

  //genero numeri random
  for ( var i= 0; i < 5; i++){
    var numeriRandomici = (Math.floor(Math.random() * (max- min +1))+ min);
    alert(numeriRandomici);
    randomNmubers.push(numeriRandomici);
  }
  alert("memorizza i numeri " + randomNmubers);

  setTimeOut(function(){
    for (var i = 0; i < 5; i++) {
      var sceltaUtente = parseInt(prompt("inserisci i numeri che ricordi"));

        if (randomNubers.includes(sceltaUtente)) {
          numeriUtente.push(sceltaUtente);
        }
    }
    alert("Hai vinto " + numeriUtente.length + " i numeri sono " + unumerUtenti)}, 30000)
  });
