
// JavaScript for card click to focus
document.querySelectorAll('.card3d').forEach(card => {
  card.addEventListener('click', function() {
    // Remove focus from any previously focused card
    document.querySelectorAll('.card3d').forEach(c => c.classList.remove('focused'));
    
    // Add 'focused' class to the clicked card
    this.classList.add('focused');
  });
});
