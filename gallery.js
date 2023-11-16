document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all images in the gallery
    const images = document.querySelectorAll('.gallery img');
  
    images.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
      });
  
      image.addEventListener('mouseout', () => {
        // Remove the hover effect
        image.style.transform = 'scale(1)';
      });
    });
  });
  