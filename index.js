var name1 = prompt("Enter Player1 Name");
var name2 = prompt("Enter Player2 Name");
document.getElementById("player1").innerHTML = name1;
document.getElementById("player2").innerHTML = name2;

function playBackgroundMusic() {
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.play();
}

window.addEventListener('load', playBackgroundMusic);

function roll() {
    
  let play1 = Math.ceil(Math.random() * 6);
  let play1dice = 'images/' + play1 + '.png';
  document.getElementById("dice1").setAttribute("src", play1dice);

  let play2 = Math.ceil(Math.random() * 6);
  let play2dice = 'images/' + play2 + '.png';
  document.getElementById("dice2").setAttribute("src", play2dice);

  if (play1 > play2) {
    document.querySelector('h1').innerHTML = name1 + " won";
  }
  else if (play1 < play2) {
    document.querySelector('h1').innerHTML = name2 + "  won";
  }
  else {
    document.querySelector('h1').innerHTML = "Draw!"
  }
}

