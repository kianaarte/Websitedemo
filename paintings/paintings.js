// Example categories object for demo purposes
const categories = {
  modern: [
    { url: "images/bees.jpg", title: "practice bees, colorpencil" },
    { url: "images/carpet1.jpg", title: "Iranian carpet, oilcolor" },
    { url: "images/carpet2.jpg", title: "Iranian carpet, oilcolor" },
    { url: "images/lady with cat.jpg", title: "Study of a painting from Steve HANKS, colorpencil" },
    { url: "images/cat.jpg", title: "Study of a painting from Lana Privitera, colorpencil" },
    { url: "images/catinbox.jpg", title: "The Istanbul cat, colorpencil" },
    { url: "images/watercolour.jpg", title: "Watercolor practice, watercolour" },
    { url: "images/bahram.jpg", title: "Portrait of Bahram Radan, Pastel" }
  ]
  // Add more categories if needed
};

function getCategoryFromHash() {
  const hash = window.location.hash.replace('#', '');
  // Default to 'modern' if no hash or unknown hash
  return categories[hash] ? hash : 'modern';
}

function renderGallery(category) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  const items = categories[category] || [];
  items.forEach(painting => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = painting.url;
    img.alt = painting.title;
    img.addEventListener('click', () => openModal(painting.url, painting.title));

    const caption = document.createElement('figcaption');
    caption.textContent = painting.title;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

// Modal logic
function setupModal() {
  let modal = document.getElementById('img-modal');
  let modalImg = document.getElementById('modal-img');
  let modalCaption = document.getElementById('modal-caption');

  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'img-modal';
    modal.id = 'img-modal';
    modal.innerHTML = `
      <img id="modal-img" src="" alt="">
      <span id="modal-caption"></span>
    `;
    document.body.appendChild(modal);
    modalImg = document.getElementById('modal-img');
    modalCaption = document.getElementById('modal-caption');
  }

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.openModal = function(src, caption) {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalCaption.textContent = caption;
  };
}

// Initial render and modal setup
setupModal();
renderGallery(getCategoryFromHash());

// Update gallery when hash changes
window.addEventListener('hashchange', () => {
  renderGallery(getCategoryFromHash());
});

// Ban right-click everywhere
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  });