const categories = {
  modern: [
    { title: "Sunset in the Valley", url: "images/sunset.jpg" },
    { title: "Forest Mist", url: "images/forest.jpg" },
    { title: "Ocean Dreams", url: "images/ocean.jpg" },
    { title: "Desert Mirage", url: "images/desert.jpg" }
  ],
  classic: [
    { title: "Pencil Portrait", url: "images/drawing1.jpg" },
    { title: "Still Life", url: "images/drawing2.jpg" }
  ],
  abstract: [
    { title: "Digital Dream", url: "images/digital1.jpg" },
    { title: "Color Splash", url: "images/digital2.jpg" }
  ]
  // Add more categories as needed
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

