import React, { useEffect, useState } from 'react'
import './App.css';
import './css/nprogress.css';
import api from './components/api'
import CharacterContext from './components/context'
import CharacterName from './components/CharacterName'
import CharacterImage from './components/CharacterImage'
import CharacterDescription from './components/CharacterDescription'
import CharacterPlaceholder from './components/CharacterPlaceholder';
import Next from './components/Next';
import Layout from './components/Layout'


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
    <CharacterContext.Provider value={{
      character,
      setCharacter,
    }}>
     <CharacterPlaceholder name={character.name} />
     <Layout 
      next={<Next />}
      name={<CharacterName name={character.name} />}
      image={<CharacterImage image={character.image} name={character.name} />}
      description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
      />    
    </CharacterContext.Provider>
  );
}

export default App;
