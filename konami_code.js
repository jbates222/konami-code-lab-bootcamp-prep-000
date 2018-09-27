const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = codes[konamiCodePosition];
  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == codes.length) {
      init();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  document.body.style.backgroundImage = "url('images/cheatBackground.png')";

  var audio = new Audio('audio/pling.mp3');
  audio.play();

  alert("cheats activated");
}