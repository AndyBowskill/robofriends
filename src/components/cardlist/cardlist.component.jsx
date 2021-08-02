import React from "react";
import Card from "../card/card.component";
import "./cardlist.style.css";

const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
