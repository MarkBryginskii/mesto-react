import React from 'react';
import logo from './images/header-logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';

const App = () => {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState();

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="root">
        <Header logo={logo} />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm name="EditAvatar" title="Обновить аватар" popupSize="medium" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="popup__input-container">
            <input data-field-name="avatar" id="popup__avatar-link" type="url" className="popup__text-field" placeholder="Ссылка на картинку" required />
            <span id="popup__avatar-link-error" className="popup__input-error"></span>
          </div>
          <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="EditProfile" title="Редактировать профиль" popupSize="large" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="popup__input-container">
            <input data-field-name="name" id="popup__user-name" type="text" className="popup__text-field" autoFocus placeholder="Имя" minLength="2" maxLength="40" required />
            <span id="popup__user-name-error" className="popup__input-error"></span>
          </div>
          <div className="popup__input-container">
            <input data-field-name="about" id="popup__user-about" type="text" className="popup__text-field" placeholder="О себе" minLength="2" maxLength="200" required />
            <span id="popup__user-about-error" className="popup__input-error"></span>
          </div>
          <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Сохранить</button>
        </PopupWithForm>
        <PopupWithForm name="AddPhoto" title="Новое место" popupSize="large" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="popup__input-container">
            <input data-field-name="name" id="popup__card-name" type="text" className="popup__text-field" autoFocus placeholder="Название" minLength="1" maxLength="30" required />
            <span id="popup__card-name-error" className="popup__input-error"></span>
          </div>
          <div className="popup__input-container">
            <input data-field-name="link" id="popup__card-link" type="url" className="popup__text-field" placeholder="Ссылка на картинку" required />
            <span id="popup__card-link-error" className="popup__input-error"></span>
          </div>
          <button type="submit" className="popup__save-button popup__save-button_disabled" disabled>Создать</button>
        </PopupWithForm>
        <PopupWithForm name="Confirm" title="Вы уверены?" popupSize="small" isOpen={isConfirmPopupOpen} onClose={closeAllPopups}>
          <button type="submit" className="popup__save-button">Да</button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
      </div>
    </>
  );
}

export default App;
