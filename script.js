/* Estilos gerais da página */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 50px;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}

/* Estilo básico dos botões */
.btn {
    padding: 20px 40px;
    font-size: 20px;
    margin: 20px;
    cursor: pointer;
    border: 2px solid #444;
    border-radius: 8px;
    transition: all 0.3s;
}

/* Efeito de hover nos botões */
.btn:hover {
    background-color: #f0f0f0;
}

/* Estilo para o container dos fogos de artifício */
.fireworks {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    z-index: 999;
}

/* Animação para os fogos de artifício em forma de coração */
@keyframes fireworks-animation {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.fireworks .heart {
    position: absolute;
    font-size: 40px;
    animation: fireworks-animation 2s ease-out infinite;
    color: red;
}

/* Animação para o botão "Não" quando clicado */
@keyframes shakeButton {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}

.shake {
    animation: shakeButton 0.5s ease;
}
