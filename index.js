const cricketBall = document.getElementById('ball');
let currentImageIndex = 2;

cricketBall.addEventListener('animationiteration', () => {
  currentImageIndex = (currentImageIndex % 5) + 2; // Loop through 1 to 5
  cricketBall.src = `CRICKETBALL/cricket (${currentImageIndex}).png`; // Change to the next image
});


document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the "About Me" link
  document.querySelector('.me').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the target element's offset from the top of the page
    const targetElement = document.getElementById('me');
    const targetOffset = targetElement.offsetTop - 100;

    // Scroll to the target element with a smooth animation
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});