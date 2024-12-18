// Get all gallery images
const images = document.querySelectorAll('.gallery-image');
const modal = document.createElement('div');
const modalImg = document.createElement('img');
const caption = document.createElement('div');
const closeButton = document.createElement('button');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

// Add modal elements to the body
modal.classList.add('lightbox-modal');
caption.classList.add('lightbox-caption');
closeButton.classList.add('close-btn');
prevButton.classList.add('nav-btn', 'prev-btn');
nextButton.classList.add('nav-btn', 'next-btn');

closeButton.innerHTML = '&times;';
prevButton.innerHTML = '&#10094;'; // Left arrow
nextButton.innerHTML = '&#10095;'; // Right arrow

modal.appendChild(modalImg);
modal.appendChild(caption);
modal.appendChild(closeButton);
modal.appendChild(prevButton);
modal.appendChild(nextButton);
document.body.appendChild(modal);

let currentImageIndex = 0;

// Function to show image in lightbox
function showImage(index) {
  currentImageIndex = index;
  const image = images[index];
  modalImg.src = image.src;
  caption.innerHTML = image.getAttribute('data-caption');
  modal.style.display = 'flex';
  
  // Update navigation button visibility
  prevButton.style.display = index === 0 ? 'none' : 'block';
  nextButton.style.display = index === images.length - 1 ? 'none' : 'block';
}

// Open the lightbox when an image is clicked
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    showImage(index);
  });
});

// Navigation functions
function showPrevImage() {
  if (currentImageIndex > 0) {
    showImage(currentImageIndex - 1);
  }
}

function showNextImage() {
  if (currentImageIndex < images.length - 1) {
    showImage(currentImageIndex + 1);
  }
}

// Event listeners for navigation
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowLeft') {
      showPrevImage();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    } else if (e.key === 'Escape') {
      modal.style.display = 'none';
    }
  }
});

// Close button and outside click handlers
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});