import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Container>
        <Wrap>
            <img src="/images/heroWithNewLogo1.png" alt="" />
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
    /* height: 45vh; */
    /* width: 30vw; */
    margin-top: 5%;
    
    img {
        height: 100%;
        width: 100%;
    }
`
