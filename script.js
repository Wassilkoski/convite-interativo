const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const heart = document.getElementById('heart');

let noClicked = 0; // Variável para controlar os cliques no botão "Não"

// Lógica para o botão "Sim"
yesButton.addEventListener('click', function() {
    heart.style.display = 'inline'; // Exibe o coração pulsante
    alert('Convite aceito! Vamos comer pizza juntos!');
    
    // Envia a resposta para o Zapier
    fetch('https://hooks.zapier.com/hooks/catch/20922748/2i0c42w/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ response: 'Sim' })
    });
});

// Lógica para o botão "Não"
noButton.addEventListener('click', function() {
    noClicked++; // Contador de cliques no botão "Não"
    
    // Se for o primeiro clique no "Não"
    if (noClicked === 1) {
        noButton.classList.add('move'); // Move o botão
    }
    
    // Se for o segundo clique no "Não"
    if (noClicked === 2) {
        const confirmChoice = confirm("Você tem certeza que não quer sair comigo?");

        if (confirmChoice) {
            // Envia a resposta para o Zapier
            fetch('https://hooks.zapier.com/hooks/catch/20922748/2i0c42w/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ response: 'Não' })
            });

            alert('Você escolheu "Não". Farei outra tentativa com o Gustavo.');
        }

        // Resetando o estado de clique para "Não" e a animação
        noClicked = 0;
        noButton.classList.remove('move'); // Reseta a animação do botão "Não"
    }
});
