let secret = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let guess = document.getElementById("guessInput").value;

  if (guess > secret) {
    document.getElementById("result").innerText = "Меньше!";
  } else if (guess < secret) {
    document.getElementById("result").innerText = "Більше!";
  } else {
    document.getElementById("result").innerText = "Ви вгадали!";
  }
}
