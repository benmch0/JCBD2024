// List of image sources
const images = [
    "JadePhotos/IMG_5152.jpg",
    "JadePhotos/IMG_5404.jpg",
    "JadePhotos/IMG_5569.JPG",
    "JadePhotos/IMG_5868.JPG",
    "JadePhotos/DSCF2158.JPG",
    "JadePhotos/IMG_5404.jpg"
    // Add more image paths as needed
];

let currentIndex = 0;

// Function to update the current image
function updateImage() {
    const imgElement = document.getElementById('currentImage');
    imgElement.src = images[currentIndex];

    // Show only the current image
    const allImages = document.querySelectorAll('.image-slider img');
    allImages.forEach((img, index) => {
        img.classList.remove('active'); // Hide all images
    });

    // Show the current image
    imgElement.classList.add('active');

    // Set the card size based on the current image's natural size
    imgElement.onload = function() {
        const card = document.querySelector('.card');
        card.style.width = `${imgElement.naturalWidth}px`; // Set card width to image width
        card.style.height = `${imgElement.naturalHeight}px`; // Set card height to image height
    };
}

// Event listeners for buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Initial image load
updateImage();