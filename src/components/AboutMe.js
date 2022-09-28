import React from 'react'
import styled from 'styled-components';

function AboutMe() {
  return (

          <Container>
              <h1>About Me</h1>
              <h4>
                  Since I’ve started this company I have grown close to the
                  majority of my clients. From working on the ambulance to
                  personally seeing my clients suffer from being sick with
                  covid, the flu or anything else I felt it was time to put
                  together a drip to help you bounce back a little faster and
                  boost your immune system to make you guys stronger. Since I
                  started this new drip, I’ve personally watched
                  over 40 clients come back to life and get back to their daily
                  grind. Let me know if we can help you!
              </h4>
          </Container>

  );
}

export default AboutMe

const Container = styled.div`
    min-height: calc(90vh - 70px);
    padding: 0 20%;
    background-color: aliceblue;
text-align: center;
    & h4 {
      margin: 0 -100px;

    }
`;


