import PropTypes from 'prop-types';
import validateForm from '../public/assets/validate_form.js';

function LoginModal({ isVisible, onClose }) {
  const handleTouchMove = (e) => {
    if (e.target.classList.contains('modal') && e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = e.target.getBoundingClientRect();
      const isSwipedDown = touch.clientY > rect.top + rect.height * 0.5;

      if (isSwipedDown) {
        onClose();
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (validateForm(form)) {
      const formData = new FormData(form);
      const dataObject = Object.fromEntries(formData);
      console.log('Данные формы:', dataObject);
      alert('Вход выполнен успешно!');
      onClose();
    }
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={`overlay ${isVisible ? '' : 'hidden'}`}>
      <div className={`modal login-modal ${isVisible ? 'modal--visible' : ''}`} onTouchMove={handleTouchMove}>
        <div className="modal__top">
          <h2 className="modal-title">Авторизация</h2>
          <button className="modal-close" type="button" onClick={handleClose}>
            <img src="/public/image/icons/close.svg" alt="close" />
          </button>
        </div>
        <form className="registration-form" id="authorization-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input id="email1" type="email" className="field" placeholder="Адрес электронной почты" required />
          </div>
          <div className="input-container">
            <input id="password1" type="password" className="field" placeholder="Пароль" minLength="8" required />
          </div>
          <button className="btn login" type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}
LoginModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default LoginModal;
