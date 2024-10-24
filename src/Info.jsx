import { useState, useEffect } from 'react';

function Info() {
  const [statisticData, setStatisticData] = useState({
    usersRegistr: 0,
    writMessages: 0,
    writToday: 0,
  });

  useEffect(() => {
    fetch('https://burtovoy.github.io/statistic.json')
      .then((response) => response.json())
      .then((data) => {
        setStatisticData(data.statistic);
      });
  }, []);

  return (
    <section className="info">
      <div className="container">
        <div className="info__wrap">
          <div className="info__block regitr">
            <div className="info__num">{statisticData.usersRegistr}</div>
            <div className="info__txt">Пользователей зарегистрировано</div>
          </div>
          <div className="info__block message">
            <div className="info__num">{statisticData.writMessages}</div>
            <div className="info__txt">Сообщений написано</div>
          </div>
          <div className="info__block today">
            <div className="info__num">{statisticData.writToday}</div>
            <div className="info__txt">Написано сегодня</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
