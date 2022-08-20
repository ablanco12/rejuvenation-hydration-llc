import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Container>
        <Wrap>
            <img src="https://github.com/ablanco12/rejuvenation-hydration-llc/blob/master/public/images/heroWithNewLogo1.PNG?raw=true" alt="" />
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
