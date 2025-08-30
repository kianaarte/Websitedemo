const images = [
  {
    url: "images/I.jpg",
    caption: "Me and the cloudy day, Digital painting"
  },
  {
    url: "images/hades.jpg",
    caption: "Hades and the crew, Digital painting"
  },
  {
    url: "images/damat.jpg",
    caption: "Dalmatians, Digital painting"
  },
  {
    url: "images/remi.jpg",
    caption: "Remi, Digital painting"
  },
  {
    url: "images/ego.jpg",
    caption: "Anton Ego, Digital painting"
  }
];

const galleryTable = document.getElementById('gallery-table');

images.forEach(imgObj => {
  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = imgObj.url;
  img.alt = imgObj.caption;
  img.addEventListener('click', () => openModal(imgObj.url, imgObj.caption));

  const caption = document.createElement('figcaption');
  caption.textContent = imgObj.caption;

  figure.appendChild(img);
  figure.appendChild(caption);
  galleryTable.appendChild(figure);
});

const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');

function openModal(src, caption) {
  modal.style.display = 'flex';
  modalImg.src = src;
  modalCaption.textContent = caption;
}

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});