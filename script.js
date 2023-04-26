window.onload = function() {
    // Lista de imagens de cachorros Shih Tzu
    const dogImages = [
      "imagem1.jpg",
      "imagem2.jpg",
      "imagem3.jpg",
    ];
  
    // Seleciona o elemento da imagem de cachorro e define uma imagem aleatória
    const dogImage = document.getElementById("dog-image");
    dogImage.src = dogImages[Math.floor(Math.random() * dogImages.length)];
  

    const countdown = document.getElementById("countdown");
    const today = new Date();
    const June6st2023 = new Date("jun 06, 2023");
    const diffTime = June6st2023 - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `Faltam ${diffDays} dias.`;
  };
  
