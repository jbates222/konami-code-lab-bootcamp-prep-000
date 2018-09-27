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

var index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = codes[index];
  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == codes.length) {
      alert("Congrats homie");
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
}