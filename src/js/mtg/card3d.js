document.querySelectorAll('.card3d').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.card3d').forEach(c => c.classList.remove('focused'));
    this.classList.add('focused');
  });

  card.addEventListener('mouseenter', function() {
    this.classList.add('no-cover');
  });

  card.addEventListener('mouseleave', function() {
    this.classList.remove('no-cover');
  });
});
