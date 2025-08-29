const backgroundImages = [
  'images/carpet1.jpg',
  'images/carpet2.jpg',
  'images/bees.jpg',
  'images/lily and fish.jpg',
  // Add more image paths as needed
];

let current = 0;

function setBackground() {
  document.body.style.backgroundImage = `url('${backgroundImages[current]}')`;
  current = (current + 1) % backgroundImages.length;
}

setBackground();
setInterval(setBackground, 2300); // Change every 2.3 seconds
