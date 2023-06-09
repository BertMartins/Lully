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
    const May21st2023 = new Date("may 21, 2023");
    const diffTime = May21st2023 - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `Faltam ${diffDays} dias.`;
  };
  
  function calculateAge() {
    var birthdateObj = new Date('04/07/2023');
    var todayObj = new Date();
    
    var years = todayObj.getFullYear() - birthdateObj.getFullYear();
    var months = todayObj.getMonth() - birthdateObj.getMonth();
    var days = todayObj.getDate() - birthdateObj.getDate();
    var hours = todayObj.getHours() - birthdateObj.getHours();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
      if (days < 0) {
        months--;
        days += daysInMonth(birthdateObj.getMonth(), birthdateObj.getFullYear());
      }
    }
  
    if (days < 0) {
      months--;
      days += daysInMonth(birthdateObj.getMonth(), birthdateObj.getFullYear());
    }
  
    if (hours < 0) {
      days--;
      hours += 24;
    }
    
    var result = "Lully tem: " + years + " anos, " + months + " meses, " + days + " dias e " + hours + " horas.";
    document.getElementById("result").innerHTML = result;
  }
  
  function daysInMonth(month, year) {
    return new Date(year, month+1, 0).getDate();
  }
