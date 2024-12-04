const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const fireworksContainer = document.getElementById('fireworks');

// Função para gerar fogos de artifício (partículas)
function generateFireworks() {
    const numParticles = 100;  // Número de partículas por explosão

    for (let i = 0; i < numParticles; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        // Cor aleatória para cada partícula
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        // Posições aleatórias dentro da tela
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        
        // Atraso aleatório para a animação das partículas
        firework.style.animationDelay = `${Math.random() * 1}s`;
        
        fireworksContainer.appendChild(firework);

        // Remover as partículas após a animação
        setTimeout(() => {
            firework.remove();
        }, 2000);  // Remover após 2 segundos
    }
}

// Ao clicar no botão "Sim"
yesButton.addEventListener('click', function() {
    // Exibe os fogos de artifício ocupando toda a tela
    fireworksContainer.style.display = 'block';
    generateFireworks();  // Gerar os fogos de artifício
    alert('Convite aceito! Vamos comer pizza juntos!');
});

// Ao clicar no botão "Não"
noButton.addEventListener('click', function() {
    const confirmChoice = confirm("Você tem certeza que quer escolher esta opção?");
    
    if (confirmChoice) {
        alert('Então comunique ao Gustavo que o convite não foi aceito.');
    }
});
