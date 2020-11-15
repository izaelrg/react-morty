import React from 'react'
import styled from 'styled-components'

const CharacterImageStyled = styled.div`
  grid-area: avatar;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    max-width: 100%;
    border-radius:50%;
  }
  @media screen and (max-width: 1024px) {
    .image {
      max-width: 100%;
      /* width: auto; */
      border-radius: 50%;
    }
  }
`


export default function CharacterImage({ image, name }) {
  return (
    <CharacterImageStyled>
      <img className="image" src={image} alt={name} />
    </CharacterImageStyled>
  )
}
