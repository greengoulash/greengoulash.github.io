const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

let currentIndex = 0;
const imageContainer = document.getElementById("imageContainer");

function updateImage() {
    imageContainer.style.backgroundImage = `url(${images[currentIndex]})`;
}

imageContainer.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize first image
updateImage();
// JavaScript Document