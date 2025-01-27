console.log("Script iniciado");

const modal = document.getElementById("modal");
const videoIframe = document.getElementById("videoIframe");
const closeBtn = document.querySelector(".close");

console.log("Elementos principais carregados:", modal, videoIframe, closeBtn);


const videoLinksFilmes = {
    "Poster_Nausicaa": "https://www.youtube.com/embed/zaskbIZtfxQ",
    "Poster_casteloceu": "https://www.youtube.com/embed/FWjiXOqRKhk",
    "Poster_totoro": "https://www.youtube.com/embed/92a7Hj0ijLs",
    "Poster_vagalumes": "https://www.youtube.com/embed/4vPeTSRd580",
    "Poster_Kiki": "https://www.youtube.com/embed/4bG17OYs-GA",
    "Poster_memoriasdeontem": "https://www.youtube.com/embed/0pVkiod6V0U",
    "Poster_Porcorosso": "https://www.youtube.com/embed/awEC-aLDzjs",
    "Poster_ouvirooceano": "https://www.youtube.com/embed/tfkHiHjrqa8",
    "Poster_pompoko": "https://www.youtube.com/embed/_7cowIHjCD4",
    "Poster_sussurro": "https://www.youtube.com/embed/0pVkiod6V0U",
};

const videoLinksCurtas = {
    "Poster_onyourmark": "https://www.youtube.com/embed/03zJIiAN2-k",
    "Poster_ghiblies": "https://www.youtube.com/embed/uQGQvPBf3S8",
    "Poster_thewhalehunt": "https://www.youtube.com/embed/W8-UzukyuOg",
    "Poster_ghiblies2": "https://www.youtube.com/embed/4WERASeT4vc",
    "Poster_imaginaryflyingmachine": "https://www.youtube.com/embed/wcf-85oY11k",
    "Poster_korosbigdayout": "https://www.youtube.com/embed/3Jc9jmooka8",
    "Poster_meieocatbus": "https://www.youtube.com/embed/KuDNxstLPuU",
    "Poster_capsuleairport": "https://www.youtube.com/embed/gx-9Ynthytc",
    "Poster_capsulespace": "https://www.youtube.com/embed/gx-9Ynthytc",
    "Poster_aflyingcityplan": "https://www.youtube.com/embed/sTfzOvYa7GM",
};

const imagesFilmes = document.querySelectorAll(".galeria img");
const imagesCurtas = document.querySelectorAll(".galeria2 img");


function openModal(videoUrl) {
    modal.style.display = "block";
    videoIframe.src = videoUrl;
}


function closeModal() {
    modal.style.display = "none";
    videoIframe.src = "";
}


imagesFilmes.forEach((img) => {
    img.onclick = function () {
        console.log("Imagem de filme clicada:", img.alt);
        const videoUrl = videoLinksFilmes[img.alt];
        if (videoUrl) {
            console.log("URL do vídeo encontrado:", videoUrl);
            openModal(videoUrl);
        } else {
            console.log("URL do vídeo não encontrado para:", img.alt);
        }
    };
});


imagesCurtas.forEach((img) => {
    img.onclick = function () {
        console.log("Imagem de curta clicada:", img.alt);
        const videoUrl = videoLinksCurtas[img.alt];
        if (videoUrl) {
            console.log("URL do vídeo encontrado:", videoUrl);
            openModal(videoUrl);
        } else {
            console.log("URL do vídeo não encontrado para:", img.alt);
        }
    };
});


closeBtn.onclick = function () {
    console.log("Modal fechado");
    closeModal();
};


window.onclick = function (event) {
    if (event.target === modal) {
        console.log("Fechando modal ao clicar fora");
        closeModal();
    }
};


