
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
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = painting.url;
    img.alt = painting.title;

    item.appendChild(img);
    gallery.appendChild(item);
  });
}

// Initial render
renderGallery(getCategoryFromHash());

// Update gallery when hash changes
window.addEventListener('hashchange', () => {
  renderGallery(getCategoryFromHash());
});

const gallery = document.getElementById('gallery');

paintings.forEach(painting => {
  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = painting.url;
  img.alt = painting.title;

  const caption = document.createElement('figcaption');
  caption.textContent = painting.title;

  figure.appendChild(img);
  figure.appendChild(caption);
  gallery.appendChild(figure);
});