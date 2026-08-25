document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      const targetUrl = this.getAttribute('href');
      const img = this.querySelector('.card-img');
      const rect = img.getBoundingClientRect();

      const clone = img.cloneNode(true);
      clone.classList.add('transition-clone');

      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;

      document.body.appendChild(clone);

      // Force the browser to register the starting position
      clone.offsetHeight; 

      clone.classList.add('transition-expanded');

      // Increased to 800ms for a slower, smoother transition
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800); 
    });
  });
});

// NEW: Clean up the cloned image when returning via the back button
window.addEventListener('pageshow', () => {
  const clones = document.querySelectorAll('.transition-clone');
  clones.forEach(clone => clone.remove());
});