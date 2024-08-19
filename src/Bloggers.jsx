function Bloggers() {
  return (
    <div className="bloggers">
      <h5 className="bloggers__title">Интересные блоггеры</h5>
      <div className="bloggers__block">
        <div className="bloggers__item">
          <div className="item-name">
            <div className="avatar">
              <img src="/public/image/user/user-5.png" alt="user" />
            </div>
            <div className="bloggers__name">
              <p className="name">Хабр Научпоп</p>
              <p className="user-name">@habr_popsci</p>
            </div>
          </div>
          <button className="btn-more" type="button">Читать</button>
        </div>
        <div className="bloggers__item">
          <div className="item-name">
            <div className="avatar">
              <img src="/public/image/user/user-6.jpg" alt="user" />
            </div>
            <div className="bloggers__name">
              <p className="name">Матч ТВ</p>
              <p className="user-name">@MatchTV</p>
            </div>
          </div>
          <button className="btn-more" type="button">Читать</button>
        </div>
        <div className="bloggers__item">
          <div className="item-name">
            <div className="avatar">
              <img src="/public/image/user/user-7.png" alt="user" />
            </div>
            <div className="bloggers__name">
              <p className="name">Популярная меха...</p>
              <p className="user-name">@PopMechanica</p>
            </div>
          </div>
          <button className="btn-more" type="button">Читать</button>
        </div>
      </div>
    </div>
  );
}
export default Bloggers;
