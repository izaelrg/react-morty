import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterName from './CharacterName'
import CharacterImage from './CharacterImage'
import CharacterDescription from './CharacterDescription'
import CharacterPlaceholder from './CharacterPlaceholder'
import Layout from './Layout'
import api from './api'
import Next from './Next'
import CharacterContext from './context'


const CharacterStyled = styled.div`
`

function Character({ match }) {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1))
    }
    getCharacter()
  }, [match.params.id])
  return (
    <CharacterStyled>
      <CharacterContext.Provider value={{
        character,
        setCharacter
      }}>
        <CharacterPlaceholder name={character.name} />
        <Layout
          next={<Next />}
          name={<CharacterName name={character.name} />}
          image={<CharacterImage image={character.image} name={character.name} />}
          description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
        />
      </CharacterContext.Provider>
    </CharacterStyled>
  );
}

export default Character
