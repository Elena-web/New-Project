import { useState, useEffect } from 'react';
import convertTime from '../public/assets/convert_time.js';
import showLoader from '../public/assets/data_loader.js';

function Posts() {
  const [messages, setMessages] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const urlMessages = 'https://burtovoy.github.io/messages.json';
  const urlPictures = 'https://burtovoy.github.io/pictures.json';

  useEffect(() => {
    const totalDataToLoad = 2;
    let dataLoaded = 0;
    Promise.all([
      fetch(urlMessages)
        .then((response) => response.json())
        .then((messagesData) => {
          const formattedMessages = messagesData.messages.map((message) => {
            // Preprocess the date string
            const parts = message.date.split(' ');
            const datePart = parts[0];
            const timePart = parts[1];
            const dateParts = datePart.split('.');
            const day = dateParts[0];
            const month = dateParts[1];
            const year = dateParts[2];
            const timeParts = timePart.split(':');
            const hours = timeParts[0];
            const minutes = timeParts[1];
            const date = new Date(year, month - 1, day, hours, minutes);
            const formattedTime = convertTime(date, new Date());
            return {
              ...message,
              date: formattedTime,
            };
          });
          setMessages(formattedMessages);
          dataLoaded += 1;
          showLoader(dataLoaded !== totalDataToLoad);
        }),
      fetch(urlPictures).then((response) => response.json())
        .then((picturesData) => {
          setPictures(picturesData.pictures);
          dataLoaded += 1;
          showLoader(dataLoaded !== totalDataToLoad);
        }),
    ])
      .then(() => {
        setIsLoading(false);
        showLoader(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        showLoader(false);
      });
  }, []);
  return (
    <section className="posts">
      <div className="container">
        <div className="posts__title">
          <h4>Последние сообщения</h4>
        </div>
        {isLoading ? (
          <div className="loader-container">
            <div className="preloader">
              <i className="bar"> </i>
              <i className="bar"> </i>
              <i className="bar"> </i>
            </div>
            <p className="loader-txt">Loading messages...</p>
          </div>
        ) : (
          messages.map((message) => (
            <div className="post" key={message.id}>
              <div className="container">
                <div className="post_wrap">
                  <div className="avatar">
                    {pictures.find((picture) => picture.user_id === message.user_id) && (
                      <img src={pictures.find((picture) => picture.user_id === message.user_id).url} alt="twiiter" />
                    )}
                  </div>
                  <div className="post__block">
                    <div className="post__top">
                      <div className="post__name">
                        <p className="name">{message.name}</p>
                        <p className="user-name">{message.mail}</p>
                      </div>
                      <div className="post__time">{message.date}</div>
                    </div>
                    <div className="post__txt">
                      <p>{message.message}</p>
                    </div>
                    {message.img_message && (
                      <div className="post__img">
                        <img src={message.img_message} alt="twiiter" />
                      </div>
                    )}
                    <div className="post__icons">
                      <div className="replies">
                        <span className="replies__icon"> </span>
                        <p className="replies__num">{message.quantityReposts}</p>
                      </div>
                      <div className="likes">
                        <span className="likes__icon"> </span>
                        <p className="likes__num">{message.quantityLike}</p>
                      </div>
                      <div className="save">
                        <span className="save__icon"> </span>
                        <p className="save__num">{message.quantityShare}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )))}
      </div>
    </section>
  );
}
export default Posts;
