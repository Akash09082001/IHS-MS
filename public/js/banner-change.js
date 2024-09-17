document.addEventListener("DOMContentLoaded", function () {
    var images = [
        "https://media.itm.ac.in/classroom_1_f082cb5f1a.webp",
        "https://media.itm.ac.in/classroom_2_d59b98f0e6.webp",
        "https://media.itm.ac.in/classroom_3_aeee9fab03.webp",
    ];

    var currentImageIndex = 0;
    var imageSlider = document.getElementById("imageSlider");

    function changeImage() {
        imageSlider.innerHTML = `<img src="${images[currentImageIndex]}" alt="">`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeImage, 3000); // Change image every 3000 milliseconds (3 seconds)
});