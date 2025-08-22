const backgroundImages = [
  'images/carpet1.jpg',
  'images/carpet2.jpg',
  'images/bees.jpg'
  // Add more image paths as needed
];

let current = 0;

function setBackground() {
  document.body.style.backgroundImage = `url('${backgroundImages[current]}')`;
  current = (current + 1) % backgroundImages.length;
}

setBackground();
setInterval(setBackground, 4000); // Change every 4 seconds
