import React from 'react';
import './card.style.css';

const Card = props => (
    <div className='card-container'>
        <img alt="Robot" src={`https://robohash.org/${props.robot.id}?size=180x180`} />
        <h2>{props.robot.name}</h2>
        <p>{props.robot.email}</p>
    </div>
);

export default Card;