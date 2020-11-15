import React, { useEffect, useState } from 'react'
import './App.css';
import API from './components/api'
import CharacterName from './components/CharacterName'
import CharacterImage from './components/CharacterImage'
import CharacterDescription from './components/CharacterDescription'
import CharacterPlaceholder from './components/CharacterPlaceholder';
import Layout from './components/Layout'

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
    <>
     <CharacterPlaceholder name={character.name} />
     <Layout 
      name={<CharacterName name={character.name} />}
      image={<CharacterImage image={character.image} name={character.name} />}
      description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
      />    
    </>
  );
}

export default App;
