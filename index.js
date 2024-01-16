const cricketBall = document.getElementById('ball');
let currentImageIndex = 2;

cricketBall.addEventListener('animationiteration', () => {
  currentImageIndex = (currentImageIndex % 6) + 2; // Loop through 1 to 5
  cricketBall.src = `CRICKETBALL/cricket (${currentImageIndex}).png`; // Change to the next image
});
