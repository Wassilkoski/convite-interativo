const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const fireworksContainer = document.getElementById('fireworks');

// Função para gerar fogos de artifício com corações
function generateFireworks() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';  // Coração para os fogos de artifício
    heart.style.left = `${Math.random() * 80}%`;  // Posição aleatória na tela
    heart.style.animationDelay = `${Math.random() * 1}s`;  // Atraso aleatório para os fogos
    fireworksContainer.appendChild(heart);

    // Remover os fogos após a animação
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Ao clicar no botão "Sim"
yesButton.addEventListener('click', function() {
    // Exibe os fogos de artifício
    fireworksContainer.style.display = 'block';
    for (let i = 0; i < 10; i++) {  // Gerar múltiplos fogos (10 corações)
        generateFireworks();
    }
    alert('Convite aceito! Vamos comer pizza juntos!');
});

// Ao clicar no botão "Não"
noButton.addEventListener('click', function() {
    const confirmChoice = confirm("Você tem certeza que quer escolher esta opção?");
    
    if (confirmChoice) {
        alert('Então comunique ao Gustavo que o convite não foi aceito.');
    }
});
