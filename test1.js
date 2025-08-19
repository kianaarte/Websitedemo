const paintings = [
  { title: "Sunset in the Valley", url: "images/sunset.jpg" },
  { title: "Forest Mist", url: "images/forest.jpg" },
  { title: "Ocean Dreams", url: "images/ocean.jpg" },
  { title: "Desert Mirage", url: "images/desert.jpg" }
];

const gallery = document.getElementById('gallery');

paintings.forEach(painting => {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = painting.url;
  img.alt = painting.title;

  item.appendChild(img);
  gallery.appendChild(item);
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

