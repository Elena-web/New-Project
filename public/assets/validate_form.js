import validateEmail from './validate_email.js';

function validateForm(form) {
  // Функция, которая удаляет ошибку
  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains('error')) {
      parent.querySelector('.error-text').remove();
      parent.classList.remove('error');
    }
  }
  // Функция, которая создаёт ошибку
  function createError(input, text) {
    const parent = input.parentNode;
    const errorText = document.createElement('span');
    errorText.classList.add('error-text');
    errorText.textContent = text;
    parent.classList.add('error');
    parent.append(errorText);
  }

  let result = true;

  form.querySelectorAll('input').forEach((input) => {
    // Проверка на совпадение паролей
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmPasswordInput = form.querySelector('input[name="confirm-password"]');
    if (confirmPasswordInput && confirmPasswordInput.getAttribute('data-confirm') === 'true') {
      if (passwordInput.value !== confirmPasswordInput.value) {
        removeError(passwordInput);
        removeError(confirmPasswordInput);
        createError(passwordInput, 'Пароли не совпадают');
        createError(confirmPasswordInput, 'Пароли не совпадают');
        result = false;
      }
    }
    // Проверка на минимальное кол-во символов
    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength) {
        removeError(input);
        createError(input, 'Минимальное кол-во символов: 8');
        result = false;
      }
    }
    // Проверка на максимальное кол-во символов
    if (input.dataset.maxLength) {
      if (input.value.length > input.dataset.maxLength) {
        removeError(input);
        createError(input, 'Максимальное кол-во символов: 15');
        result = false;
      }
    }
    // Проверка на валидность email
    if (input.dataset.email) {
      const isValid = validateEmail(input.value); // Передаем значение из поля ввода
      if (isValid === false) {
        removeError(input);
        createError(input, 'Email не валиден');
        result = false;
      }
    }
    // Проверка на наличие пустых полей
    if (input.dataset.required === 'true') {
      if (input.value === '') {
        removeError(input);
        createError(input, 'Поле не заполнено!');
        result = false;
      }
    }
  });
  return result;
}

document.getElementById('registration-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm(this) === true) {
    const formRegistration = document.getElementById('registration-form');
    formRegistration.querySelectorAll('input').forEach((item) => {
      console.log(item.value);
    });
    alert('Регистрация прошла успешно!');
  }
});
