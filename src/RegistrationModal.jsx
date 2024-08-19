import PropTypes from 'prop-types';
import validateForm from '../public/assets/validate_form.js';

function RegistrationModal({ isVisible, onClose }) {
  if (typeof isVisible !== 'boolean') {
    throw new Error('isVisible prop must be a boolean');
  }

  if (typeof onClose !== 'function') {
    throw new Error('onClose prop must be a function');
  }
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

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (validateForm(form)) {
      const formData = new FormData(form);
      const dataObject = Object.fromEntries(formData);
      console.log('Registration form data:', dataObject);
      alert('Регистрация выполнена успешно!');
      onClose();
    }
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={`overlay ${isVisible ? '' : 'hidden'}`}>
      <div
        className={`modal registration-modal ${isVisible ? 'modal--visible' : ''}`}
        onTouchMove={handleTouchMove}
      >
        <div className="modal__top">
          <h2 className="modal-title">Регистрация</h2>
          <button className="modal-close" type="button" onClick={handleClose}>
            <img src="/public/image/icons/close.svg" alt="close" />
          </button>
        </div>
        <form className="registration-form" id="registration-form" onSubmit={handleRegistrationSubmit}>
          <div className="input-container">
            <input id="email" type="text" className="field" placeholder="Электронная почта" data-email="true" data-required="true" />
          </div>
          <div className="input-container">
            <input id="password" type="password" name="password" className="field" placeholder="Пароль" data-min-length="8" data-max-length="15" data-required="true" />
          </div>
          <div className="input-container">
            <input id="password-confirm" type="password" name="confirm-password" className="field" placeholder="Подтвердите пароль" data-min-length="8" data-max-length="15" data-required="true" data-confirm="true" />
          </div>
          <button className="btn registr" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
RegistrationModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default RegistrationModal;
