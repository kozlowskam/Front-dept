import React from 'react';

const Card = (props) => {

  return (
    <div className="c-card">
      <img className="c-card__image" src={require(`../static/images/${props.item.image}`)} alt="case" />
      <div className="c-card__content">
        <div className="c-card__company">
          {props.item.company}
        </div>
        <div className="c-card__title">
          {props.item.title}
        </div>
        <a className="c-card__button" href={props.item.link} target="_blank" rel="noopener noreferrer">VIEW CASE</a>
      </div>
    </div>
  )
}

export default Card