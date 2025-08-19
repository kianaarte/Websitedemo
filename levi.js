document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('lightbox-img').src = this.src;
    document.getElementById('lightbox').style.display = 'flex';
  });
});

document.querySelector('.lightbox .close').onclick = function() {
  document.getElementById('lightbox').style.display = 'none';
};

document.getElementById('lightbox').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};