const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const heart = document.getElementById('heart');

let noClicked = false; // Variável para controlar os cliques no botão "Não"

// Ao clicar em "Sim"
yesButton.addEventListener('click', function() {
    heart.style.display = 'inline'; // Exibe o coração pulsante
    alert('Convite aceito! Vamos comer pizza!');
    
    // Envia a notificação para o Zapier com a resposta "Sim"
    fetch('https://hooks.zapier.com/hooks/catch/20922748/2i0c42w/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ response: 'Sim' })
    });
});

// Ao clicar em "Não"
noButton.addEventListener('click', function() {
    if (!noClicked) {
        noButton.classList.add('move'); // Adiciona a animação ao botão
        noClicked = true; // Marca que o botão "Não" foi clicado uma vez
    } else {
        const confirmChoice = confirm("Você tem certeza que quer escolher essa opção?");

        if (confirmChoice) {
            // Envia a notificação para o Zapier com a resposta "Não"
            fetch('https://hooks.zapier.com/hooks/catch/20922748/2i0c42w/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ response: 'Não' })
            });

            // Resetando o estado de clique para "Não" e a animação
            noClicked = false;
            noButton.classList.remove('move'); // Reseta o movimento do botão
            alert('Notificação enviada ao Zapier: "Não" foi escolhido.');
        }
    }
});
