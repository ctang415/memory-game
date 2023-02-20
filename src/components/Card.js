import React from "react";

const Card = ({cards, setNewCards, addClicks}) => {
    return (
    cards.map((card) => {
        return (
            <div key={card.character} id={card.character} className="characters" onClick={(e) => { console.log(e.target.parentNode.id); addClicks(e); setNewCards(cards)}}>
                <img src={card.url} alt={card.character}></img>
                <span>{card.character}</span>
            </div>
        )
    })
    )
}

export default Card