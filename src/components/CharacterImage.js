import React from 'react'
import styled from 'styled-components'

const CharacterImageStyled = styled.img`
  max-width: 100%;
  border-radius:50%;
`

export default function CharacterImage({ image, name }) {
  return (
    <CharacterImageStyled src={image} alt={name} />
  )
}
