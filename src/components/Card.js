import React from "react";

const Card = ({cards}) => {
    return (
    cards.map((card) => {
        return (
            <div key={card.character} className="characters">
                <img src={card.url}></img>
                <span>{card.character}</span>
            </div>
        )
    })
    )
}

export default Card