document.addEventListener("DOMContentLoaded", function () {
    const textBoxes = document.querySelectorAll(".text-box");
    const backgroundOverlay = document.querySelector(".background-overlay");
    const images = [
        "images/image1.jpg", "images/image2.jpg", "images/image3.jpg", 
        "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", 
        "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", 
        "images/image10.jpg", "images/image11.jpg", "images/image12.jpg",
        "images/image13.jpg"
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(textBoxes).indexOf(entry.target);
                if (index !== -1 && index < images.length) {
                    backgroundOverlay.style.backgroundImage = `url(${images[index]})`;
                }
            }
        });
    }, { threshold: 0.6 });

    textBoxes.forEach(box => observer.observe(box));
});
