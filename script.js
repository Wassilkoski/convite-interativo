const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const fireworksContainer = document.getElementById('fireworks');

let noClicked = 0; // Contador para cliques no botão "Não"

// Função para gerar fogos de artifício com corações e pizzas
function generateFireworks() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 80}%`;
    heart.style.animationDelay = `${Math.random() * 1}s`;
    fireworksContainer.appendChild(heart);

    const pizza = document.createElement('div');
    pizza.classList.add('pizza');
    pizza.innerHTML = '🍕';
    pizza.style.left = `${Math.random() * 80}%`;
    pizza.style.animationDelay = `${Math.random() * 1}s`;
    fireworksContainer.appendChild(pizza);

    // Remover os fogos após a animação
    setTimeout(() => {
        heart.remove();
        pizza.remove();
    }, 2000);
}

// Ao clicar no botão "Sim"
yesButton.addEventListener('click', function() {
    // Exibe os fogos de artifício
    fireworksContainer.style.display = 'block';
    for (let i = 0; i < 5; i++) {  // Gerar múltiplos fogos
        generateFireworks();
    }
    alert('Convite aceito! Vamos comer pizza juntos!');
});

// Ao clicar no botão "Não"
noButton.addEventListener('click', function() {
    noClicked++;  // Contador de cliques no "Não"

    // Se for o primeiro clique
    if (noClicked === 1) {
        noButton.classList.add('shake'); // Faz o botão "Não" tremer
    }

    // Se for o segundo clique
    if (noClicked === 2) {
        const confirmChoice = confirm("Você tem certeza que quer escolher esta opção?");
        
        if (confirmChoice) {
            alert('Então comunique ao Gustavo que o convite não foi aceito.');
        }

        // Resetando a contagem e removendo o efeito de tremor
        noClicked = 0;
        noButton.classList.remove('shake');
    }
});
