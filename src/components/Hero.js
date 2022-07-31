import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <div>
        <Wrap>
            <img src="/images/temp_hero.jpg" alt="" />
        </Wrap>
    </div>
  )
}

export default Hero

const Wrap = styled.div`
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;

    }
`
