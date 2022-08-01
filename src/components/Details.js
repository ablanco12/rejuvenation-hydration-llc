import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
        
        <ImageTitle>
          <img src="/images/Athletic_IV.png" alt="" />
        </ImageTitle>
        <Controls>
          <DescriptionContainer>
            <Subtitle>
                <h1>Athletic IV</h1>
                <h2>1 hour and up · $160</h2>
                
            </Subtitle>
            <Description>
                <h4>Our athletic bag is a good option for pre-hydrating before
                     a big sporting event or rigorous workout, as well as 
                     replenishing fluids and electrolytes afterward.</h4>
            </Description>

            <BookNowButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Book Now</span>
            </BookNowButton>
          </DescriptionContainer>
        </Controls>
      </Container>
  )
}


export default Details


const Container = styled.div`
    display: flex;
    min-height: calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const ImageTitle = styled.div`
  height: 80vh;
  width: 55vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`
const DescriptionContainer = styled.div`
    text-align: left;
`
const BookNowButton = styled.button`
  background: #62c4ea;
  color: rgb(249, 249, 249);
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`



const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  color: black;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;
  color: black;
`