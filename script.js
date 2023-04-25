window.onload = function() {
    // Lista de imagens de cachorros Shih Tzu
    const dogImages = [
      "imagem1.jpg",
      "imagem2.jpg",
      "imagem3.jpg",
      // Adicione mais imagens aqui
    ];
  
    // Seleciona o elemento da imagem de cachorro e define uma imagem aleatória
    const dogImage = document.getElementById("dog-image");
    dogImage.src = dogImages[Math.floor(Math.random() * dogImages.length)];
  
    // Seleciona o elemento do contador de dias e calcula o número de dias restantes até 1º de julho de 2023
    const countdown = document.getElementById("countdown");
    const today = new Date();
    const july1st2023 = new Date("May 22, 2023");
    const diffTime = july1st2023 - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `Faltam ${diffDays} dias.`;
  };
  
