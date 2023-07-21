import React from "react";

const Card = ({villager, addClicks}) => {
    return (
    villager.map((villager) => {
        return (
            <div key={villager.name} id={villager.name} className="characters" onClick={(e) => { addClicks(e)}}>
                <img src={villager.image} alt={villager.name}></img>
                <span>{villager.name}</span>
            </div>
        )
    })
    )
}

export default Card