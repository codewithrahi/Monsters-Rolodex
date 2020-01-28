import React from 'react';

import './Card.css';

const Card = props => (
    <div className='card-container'>
        <img alt='Monster' src={`https://robohash.org/${props.id}?set=set2&size=180x180`} />
        <h2>{props.name}</h2>
        <p>{props.email}</p>
    </div>
);

export default Card;
