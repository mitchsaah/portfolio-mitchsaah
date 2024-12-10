document.querySelectorAll('.expertise-card').forEach((card) => {
    const percentage = card.getAttribute('data-percentage'); 
    const overlay = card.querySelector('.expertise-overlay'); 
  
    // Percentage on hover
    card.addEventListener('mouseover', () => {
      overlay.innerHTML = `<span>${percentage}</span>`;
    });
  
    // Perventage after leaving the hover
    card.addEventListener('mouseleave', () => {
      overlay.innerHTML = '';
    });
  });