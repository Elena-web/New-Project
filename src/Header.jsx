function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__logo">
          <img src="../image/icons/logo.svg" alt="logo" />
        </div>
        <h1 className="title">Оставайся на связи с друзьями, даже когда их нет рядом</h1>
        <div className="header__btn">
          <button className="btn registr" type="button" id="registerButton">Зарегистрироваться</button>
          <button className="btn login" type="button" id="loginButton">Войти</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
