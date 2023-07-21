import React, { useState, useEffect } from "react";
import './App.css';
import Card from './components/Card'
import Modal from "./components/Modal";
/*
import { Broccolo, Cousteau, Chester, Dizzy, Francine, Eunice, Ketchup, Lily, 
         Maple, Marshal, Merengue, Nibbles, Pietro, Raymond, Roald, Sherb } from "./images";
*/

  const App = () => {
    const ids = [64, 66, 77, 140, 145, 155, 164, 180, 261, 290, 329, 341, 345, 354, 360, 372]
    const [ villager, setVillager ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [score, setScore] = useState(0)
    const [record, setRecord] = useState(0)
    const [clicks, setClicks] = useState([])
    const [modal, setModal] = useState(false)
    let load = true

    useEffect(() => {
      if (load) {
        Promise.all([ids.forEach(id => {
          const callAPI = async (id) => {
            try {
              const response = await fetch(`https://acnhapi.com/v1/villagers/${id}`, {mode: 'cors'})
              if (!response.ok) {
                throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
                )
              }
              let data = await response.json()
              setVillager(vill => [...vill, { name: data.name["name-USen"], image: data.image_uri}])
            } catch(err) {
              setError(err)
            }
        }
          callAPI(id)
        })])
        setLoading(false)
        load = false;
      }
    }, [])
/*
    const villagers = [ 
      {url: Broccolo, character: "Broccolo"}, {url: Chester, character: 'Chester'}, {url: Cousteau, character: 'Cousteau'}, 
      {url: Dizzy, character: "Dizzy"}, {url: Francine, character:"Francine"}, 
      {url: Eunice, character: 'Eunice'}, {url: Ketchup, character: 'Ketchup'}, 
      {url: Lily, character: 'Lily'}, {url: Maple, character: 'Maple'}, 
      {url: Marshal, character: 'Marshal'}, {url: Merengue, character: 'Merengue'}, 
      {url: Nibbles, character:'Nibbles'}, {url: Pietro, character: 'Pietro'},  
      {url: Raymond, character: 'Raymond'}, {url: Roald, character: 'Roald'}, {url: Sherb, character: 'Sherb'} 
    ]
    */
    

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
        shuffleArray(villager)
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

  useEffect(() => {
    if (score === 16) {
      setModal(true)
      setRecord(score)
      setClicks([])
      setScore(0)
      shuffleArray(villager)
    }
  }, [score])

  if (error) {
    return (
      <div>
        An error has occurred.
      </div>
    )
  } else if (loading) {
    <div>
      Loading...
    </div>
  } else {
    return (
      <div className="app">
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
        <Modal
        setModal={setModal}
        modal={modal}
        />
          <div className="carddisplay">
            <Card 
            villager={villager}
            addClicks={addClicks}
            />
          </div>
    </div>
  );
    }
}

export default App;
