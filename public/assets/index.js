// Открытие окон регистрации/авторизации
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const registerModal = document.querySelector('.registration-modal');
const loginModal = document.querySelector('.login-modal');
const overlay = document.querySelector('.overlay');

registerButton.addEventListener('click', () => {
  registerModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

loginButton.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    registerModal.classList.add('hidden');
    loginModal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// Закрытие по свайпу вниз
let startY;
let endY;

registerModal.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

registerModal.addEventListener('touchmove', (e) => {
  endY = e.touches[0].clientY;
});

registerModal.addEventListener('touchend', () => {
  if (endY - startY > 50) {
    registerModal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

loginModal.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

loginModal.addEventListener('touchmove', (e) => {
  endY = e.touches[0].clientY;
});

loginModal.addEventListener('touchend', () => {
  if (endY - startY > 50) {
    loginModal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
