import React, { useEffect, useState } from 'react'
import './App.css';
import API from './components/api'
import Character from './components/Character'
import CharacterName from './components/CharacterName'
import CharacterImage from './components/CharacterImage'
import CharacterDescription from './components/CharacterDescription'
import CharacterPlaceholder from './components/CharacterPlaceholder';

const api = new API()

function App() {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(1))
      console.log(character)
    }
    getCharacter()
  }, [])
  return (
    <div className="App">
     <CharacterPlaceholder name={character.name} />
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img className="logo" src="./static/images/logo@2x.png" width="280" alt="" />
          <div className="social">
            <a href="https://instagram.com/LeonidasEsteban">
              <img src="./static/images/instagram.svg" alt="" />
            </a>
            <a href="https://facebook.com/LeonidasEsteban">
              <img src="./static/images/facebook.svg" alt="" />
            </a>
            <a href="https://twitter.com/LeonidasEsteban">
              <img src="./static/images/twitter.svg" alt="" />
            </a>
          </div>
          <div className="navigation name">
            <a href="#">Name</a>
          </div>
          <CharacterName name={character.name} />
          <CharacterImage image={character.image} name={character.name} />
          
          <div className="navigation about">
            <a href="#">About</a>
          </div>

          <CharacterDescription gender={character.gender} species={character.species} status={character.status} />
          
          <span className="asset bottom">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>

          <div></div>
          <div className="learn-more">
            <span>learn more</span>
          </div>

          <div className="arrow" id="load-next"></div>
      </div>
    </div>
  );
}

export default App;
