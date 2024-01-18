const cricketBall = document.getElementById('ball');
let currentImageIndex = 2;

cricketBall.addEventListener('animationiteration', () => {
  currentImageIndex = (currentImageIndex % 5) + 2; 
  cricketBall.src = `CRICKETBALL/cricket (${currentImageIndex}).png`; 
});