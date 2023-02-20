import React from "react";

const Card = ({cards, setNewCards}) => {
    return (
    cards.map((card) => {
        return (
            <div key={card.character} className="characters" onClick={() => setNewCards(cards)}>
                <img src={card.url} alt={card.character}></img>
                <span onClick={()=> console.log(cards)}>{card.character}</span>
            </div>
        )
    })
    )
}

export default Card