import { useState } from 'react';
import RegistrationModal from './RegistrationModal.jsx';
import LoginModal from './LoginModal.jsx';
import validateForm from '../public/assets/validate_form.js';

function Header() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistrationModal(true);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleModalClose = () => {
    setShowRegistrationModal(false);
    setShowLoginModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (validateForm(form)) {
      const formData = new FormData(form);
      const dataObject = Object.fromEntries(formData);
      console.log('Данные формы:', dataObject);
      alert('Вход выполнен успешно!');
      handleModalClose(); // вызываем handleModalClose, чтобы закрыть модальное окно
    }
  };
  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (validateForm(form)) {
      const formData = new FormData(form);
      const dataObject = Object.fromEntries(formData);
      console.log('Registration form data:', dataObject);
      alert('Регистрация выполнена успешно!');
      handleModalClose(); // вызываем handleModalClose, чтобы закрыть модальное окно
    }
  };
  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <img src="../image/icons/logo.svg" alt="logo" />
        </div>
        <h1 className="title">Оставайся на связи с друзьями, даже когда их нет рядом</h1>
        <div className="header__btn">
          <button className="btn registr" type="button" onClick={handleRegistrationClick}>
            Зарегистрироваться
          </button>
          <button className="btn login" type="button" onClick={handleLoginClick}>
            Войти
          </button>
        </div>
      </div>
      <div className="header__background">
        <img src="../image/background/cover.jpg" alt="twiiter" />
      </div>
      <RegistrationModal
        isVisible={showRegistrationModal}
        onClose={handleModalClose}
        onSubmit={handleRegistrationSubmit}
      />
      <LoginModal
        isVisible={showLoginModal}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
      />
    </header>
  );
}

export default Header;
