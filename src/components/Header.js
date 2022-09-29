import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
      <Container>
              <h1>Mobile IV & Injection Services</h1>
              <h3 style={{color: 'gray'}}>
                  Expand your limits... <br />
                  <br />
                  You want to keep going, but you’re running on fumes Drinking a
                  gallon of water a day, but still feeling dehydrated <br />
                  <br />
                  Overwhelmed with trying different fat burners, from powders to
                  pills and tired of having different reactions to them.
                  <br />
                  <br />
                  Is simplicity too much to ask for??
                  <br />
                  <br />
                  You’re wanting to Optimize your body,right?
                  <br />
                  <br />
                  Lucky for you! There is a solution...
                  <br />
                  <br />
                  Stop waiting to have more energy, feel hydrated and testing
                  out random supplements in your body.
                  <br />
                  <br />
                  Schedule your appointment & start receiving the nutrients your
                  body needs with IV Hydration & Vitamin Therapy
              </h3>

              <h3 style={{color: '#62c4ea'}}>
                  Rejuvenation Hydration offers a variety of at-home services,
                  please see below:
              </h3>
      </Container>
  );
}

export default Header

const Container = styled.div`
    /* min-height: calc(90vh - 70px); */
    padding: 0 10%;
    background-color: aliceblue;
`;

