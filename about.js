const paintings = [
  { title: "Me", url: "images/me.jpg" },
];

const gallery = document.getElementById('gallery');

paintings.forEach(painting => {
  const item = document.createElement('div');
  item.className = 'about-gallery-item';

  const img = document.createElement('img');
  img.src = painting.url;
  img.alt = painting.title;
  img.className = 'about-img';

  const caption = document.createElement('div');
  caption.className = 'about-caption';
  caption.textContent = painting.title;

  item.appendChild(img);
  item.appendChild(caption);
  gallery.appendChild(item);
});