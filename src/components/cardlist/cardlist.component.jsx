import React from 'react';
import Card from '../card/card.component'

const CardList = (props) => (
    <div>
        {props.robots.map(robot => (
            <Card key={robot.id} robot={robot}/>
        ))}
    </div>
);

export default CardList;