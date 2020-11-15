import React from 'react'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  .character-name-area {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    grid-area: character-name;
    /* padding-inline-start: 1em; */
  }  
  .character-image-area {
    grid-area: avatar;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .character-description-area {
    grid-area: character-description;
  }
  @media screen and (max-width: 1024px) {
    .character-name-area {
      margin-top: 1em;
      justify-content: center;
    }
  }
`

export default function Layout({ name, image, description }) {
  return (
    <LayoutStyled>
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
        <div className="character-name-area">
          {name}
        </div>
        <div className="character-image-area">
          {image}
        </div>

        <div className="navigation about">
          <a href="#">About</a>
        </div>

        <div className="character-description-area">
          {description}
        </div>

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
    </LayoutStyled>
  )
}
