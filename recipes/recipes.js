const images = [
  {
    url: "images/Pasta_Florentina.png",
    caption: "Pasta Florentina Recipe, Digital painting"
  },
  {
    url: "images/Dolmeh_Gojeh.jpg",
    caption: "Dolmeh Gojeh Recipe, Digital painting"
  },
  {
    url: "images/Dolmeh_Bademjan.jpg",
    caption: "Dolmeh Bademjan Recipe, Digital painting"
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