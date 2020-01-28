import React from 'react';

import './CardList.css';

import Card from './Card/Card';

const CardList = props => (
    <div className='card-list'>
        { props.monsters.map(monster => (
            <Card 
                key={monster.id}
                id={monster.id}
                name={monster.name}
                email={monster.email}
            />
        ))}
    </div>
);

export default CardList;