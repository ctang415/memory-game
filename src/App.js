import React, { useState, useEffect } from "react";
import './App.css';
import Card from './components/Card'
import { Broccolo, Cousteau, Chester, Dizzy, Francine, Eunice, Ketchup, Lily, 
         Maple, Marshal, Merengue, Nibbles, Pietro, Raymond, Roald, Sherb } from "./images";

  const App = () => {

    const villagers = [ 
      {url: Broccolo, character: "Broccolo"}, {url: Chester, character: 'Chester'}, {url: Cousteau, character: 'Cousteau'}, 
      {url: Dizzy, character: "Dizzy"}, {url: Francine, character:"Francine"}, 
      {url: Eunice, character: 'Eunice'}, {url: Ketchup, character: 'Ketchup'}, 
      {url: Lily, character: 'Lily'}, {url: Maple, character: 'Maple'}, 
      {url: Marshal, character: 'Marshal'}, {url: Merengue, character: 'Merengue'}, 
      {url: Nibbles, character:'Nibbles'}, {url: Pietro, character: 'Pietro'},  
      {url: Raymond, character: 'Raymond'}, {url: Roald, character: 'Roald'}, {url: Sherb, character: 'Sherb'} 
    ]
    
    const [score, setScore] = useState(0)

    const [record, setRecord] = useState(0)

    const [cards, setCards] = useState([])

    const [clicks, setClicks] = useState([])

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

    const addClicks = (e) => {
      if (clicks.includes(e.target.parentNode.id) === false) {
        setClicks(clicks => [...clicks, e.target.parentNode.id])
        setScore(score + 1)
        console.log(clicks)
      } else if (clicks.includes(e.target.parentNode.id)) {
        if (record < score) {
          setClicks([])
          setRecord(score)
          setScore(0)
        }
        setClicks([])
        setScore(0)
      }
    }
    
    const setNewCards = (cards) => {
      shuffleArray(cards)
      setCards(cards => [...cards])
    }

    useEffect(() => {
      shuffleArray(villagers)
      setCards(villagers)
      console.log(cards)
  }, [setCards])

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
        </div>
        <div className="carddisplay">
          <Card 
          cards={cards}
          addClicks={addClicks}
          setNewCards={setNewCards}
          />
          </div>
    </div>
  );
}

export default App;
