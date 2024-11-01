import { useState } from 'react';
import RegistrationModal from './RegistrationModal.jsx';
import LoginModal from './LoginModal.jsx';

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
        <img src="../image/background/header-dekstop.jpg" className="img dekstop" alt="twiiter" />
        <img src="../image/background/cover.jpg" className="img mobile" alt="twiiter" />
      </div>
      <RegistrationModal
        isVisible={showRegistrationModal}
        onClose={handleModalClose}
      />
      <LoginModal
        isVisible={showLoginModal}
        onClose={handleModalClose}
      />
    </header>
  );
}

export default Header;
