import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Container>
        <Wrap>
            <img src="/build/images/RHhero3.png" alt="" />
        </Wrap>
    </Container>
  )
}

export default Hero
const Container = styled.div`
    /* padding-left: 60%; */
`
const Wrap = styled.div`
    cursor: pointer;
    /* height: 60vh;
    width: 30vw; */
    
    img {
        height: 100%;
        width: 100%;

    }
`
