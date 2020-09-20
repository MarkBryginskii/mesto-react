import React from 'react';

const Card = (props) => {

  const handleClick = () => {
    props.onCardClick(props);
  }

  return(
    <li className="photo-card">
      <button type="button" className="photo-card__trash-icon" value=""></button>
      <img className="photo-card__image" src={props.link} alt={props.name} onClick={handleClick}/>
      <div className="photo-card__footer">
        <h3 className="photo-card__title">{props.name}</h3>
          <div className="photo-card__like-container">
            <button type="button" className="photo-card__like-icon"></button>
            <p className="photo-card__like-counter">{props.likes.length}</p>
          </div>
      </div>
    </li>
  );
}

export default Card;
