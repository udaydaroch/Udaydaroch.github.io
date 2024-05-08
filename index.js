const cricketBall = document.getElementById('ball');
let currentImageIndex = 2;

cricketBall.addEventListener('animationiteration', () => {
  currentImageIndex = (currentImageIndex % 5) + 2; 
  cricketBall.src = `CRICKETBALL/cricket (${currentImageIndex}).png`; 
});

function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const offset = 150; // Adjust the offset as needed
    const targetPosition = targetSection.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}