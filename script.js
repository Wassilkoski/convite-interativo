// Seleciona os botões
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');

// Função para notificar a escolha via webhook
function sendNotification(choice) {
  fetch('https://hooks.zapier.com/hooks/catch/20922748/2i0c42w/', { // Troque pelo link do seu webhook
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: `A resposta foi: ${choice}` }),
  });
}

// Evento para o botão "Sim"
yesButton.addEventListener('click', () => {
  alert('Eba! Vamos marcar então! 🍕');
  sendNotification('Sim');
  yesButton.style.animation = 'pulse 1s infinite';
});

// Evento para o botão "Não"
noButton.addEventListener('mouseover', () => {
  const randomX = Math.random() * window.innerWidth * 0.8;
  const randomY = Math.random() * window.innerHeight * 0.8;

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

noButton.addEventListener('click', () => {
  sendNotification('Não');
});
