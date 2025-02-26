let images = Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhoto = document.getElementById("mainPhoto");
let captionWrapper = document.querySelector(".caption-wrapper");
let caption = document.getElementById("caption");

// Definir a primeira imagem e a legenda ao carregar a página
window.addEventListener("DOMContentLoaded", function() {
    let firstImage = images[0];
    mainPhoto.src = firstImage.src;
    caption.textContent = firstImage.getAttribute("name");
    mainPhoto.classList.add("show");
    captionWrapper.classList.add("show");
});

images.forEach(function(image) {
    image.addEventListener("click", function(event) {
        let name = event.target.getAttribute("name");
        let newSrc = event.target.src;

        mainPhoto.classList.remove("show");
        captionWrapper.classList.remove("show");

        setTimeout(() => {
            mainPhoto.src = newSrc;
            caption.textContent = name;
            mainPhoto.classList.add("show");
            captionWrapper.classList.add("show");
        }, 300);
    });
});
