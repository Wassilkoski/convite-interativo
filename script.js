const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const fireworksContainer = document.getElementById('fireworks');

// Função para gerar fogos de artifício (partículas)
function generateFireworks() {
    // Criar várias partículas para os fogos
    for (let i = 0; i < 20; i++) {  // Gerar 20 partículas por fogo
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  // Cor aleatória para as partículas
        firework.style.left = `${Math.random() * 80}%`;  // Posição aleatória na tela
        firework.style.top = `${Math.random() * 50}%`;  // Posição aleatória na tela
        firework.style.animationDelay = `${Math.random() * 1}s`;  // Atraso aleatório para a animação
        fireworksContainer.appendChild(firework);

        // Remover as partículas após a animação
        setTimeout(() => {
            firework.remove();
        }, 2000);  // Remover após 2 segundos
    }
}

// Ao clicar no botão "Sim"
yesButton.addEventListener('click', function() {
    // Exibe os fogos de artifício
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
