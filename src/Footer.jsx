import { useState } from 'react';
import RegistrationModal from './RegistrationModal.jsx';
import LoginModal from './LoginModal.jsx';

function Footer() {
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
    <footer className="footer">
      <div className="container">
        <h2 className="title">Зарегистрируйтесь и узнайте обо всём первым</h2>
        <div className="footer__btn">
          <button className="btn registr" type="button" onClick={handleRegistrationClick}>Зарегистрироваться</button>
          <button className="btn login" type="button" onClick={handleLoginClick}>Войти</button>
        </div>
      </div>
      <RegistrationModal
        isVisible={showRegistrationModal}
        onClose={handleModalClose}
      />
      <LoginModal
        isVisible={showLoginModal}
        onClose={handleModalClose}
      />
    </footer>
  );
}
export default Footer;
