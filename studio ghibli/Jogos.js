
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");


const gameDescriptions = {
    "Dominion_of_the_Dark_Djinn": "Uma aventura épica onde você controla um jovem herói em um mundo mágico.",
    "Wrath_of_the_White_Witch": "Um RPG encantador que combina exploração e combate em um universo vibrante.",
    "Revenant_Kingdom": "Um jogo que mistura construção de reino com uma narrativa cativante e personagens adoráveis.",
    "ni_no_kuni_remastered": "Uma versão remasterizada do clássico, com gráficos melhorados e jogabilidade otimizada."
};


const gameImages = document.querySelectorAll(".galeria-jogos-nome img");

gameImages.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalTitle.textContent = img.alt.replace(/_/g, " "); 
        modalImage.src = img.src; 
        modalDescription.textContent = gameDescriptions[img.alt] || "Descrição não disponível."; 
    };
});


closeBtn.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
