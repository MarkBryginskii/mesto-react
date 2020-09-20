import React from 'react';
import appApi from '../utils/Api.js';
import Card from './Card.js';

const Main = (props) => {

  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect( () => {
    appApi.getUserInfo()
    .then(res => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    });
    appApi.getInitialCards()
    .then(cards => {
      setCards(cards);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="аватар" src={userAvatar} />
          <button onClick={props.onEditAvatarClick} type="button" className="profile__avatar-edit-button"></button>
        </div>
          <div className="profile__info">
            <div className="profile__info-row">
              <p className="profile__user-name">{userName}</p>
              <button onClick={props.onEditProfileClick} type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__user-about">{userDescription}</p>
          </div>
        <button onClick={props.onAddPlaceClick} type="button" className="profile__add-button"></button>
      </section>
      <section className="photo-grid">
        <ul className="photo-cards">
          {cards.map(card => <Card onCardClick={props.onCardClick} key={card._id} {...card} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
