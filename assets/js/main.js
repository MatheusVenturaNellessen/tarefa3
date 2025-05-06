// Manipulação de elementos HTML
const hambuguer = document.getElementById('hambuguer');
const links = document.getElementById('links');
const form = document.querySelector('.form');

// Função exibe menu hambuguer 
hambuguer.addEventListener('click', () => {
  links.classList.toggle('show');
});

// Função que alerta/simula envio de formulário ao usuário
form.addEventListener('submit', e => {
    e.preventDefault();

    alert('Formulário "enviado".');
});
