import React, { useState, useEffect } from "react";
import './App.css';
import Card from './components/Card'
import { Broccolo, Cousteau, Chester, Dizzy, Francine, Eunice, Ketchup, Lily, 
         Maple, Marshal, Merengue, Nibbles, Pietro, Raymond, Roald, Sherb } from "./images";

  const App = () => {
    const images = [ Broccolo, Cousteau, Chester, Dizzy, Francine, Eunice, Ketchup, Lily, 
      Maple, Marshal, Merengue, Nibbles, Pietro, Raymond, Roald, Sherb ]
    
    const [score, setScore] = useState(0)

    const [record, setRecord] = useState(0)

    const [cards, setCards] = useState({
      photo: Broccolo,
      name: ''
    })

    const shuffleArray = (array) => {
      let i, j, index;
      for (index = array.length-1; index > 0; index--) {
        j = Math.floor(Math.random()*(index+1))
        i = array[index]
        array[index] = array[j]
        array[j] = i
      }
      return array
    }

    useEffect(() => {
      shuffleArray(cards)
    }, [])
  
    return (
      <div>
        <div className="header">
          <div className="left">
          <span id="headertext" className="title">Animal Crossing Memory Game</span>
          <span id="instruction">How to Play: Get points by clicking on each card once. 
          Make sure you don't click on the same one twice!</span>
        </div>
        <div className="right">
          <span>Current Score: {score}</span>
          <span>High Score: {record}</span>
        </div>
          <Card
          cards={cards}
          />
        </div>
    </div>
  );
}

export default App;
