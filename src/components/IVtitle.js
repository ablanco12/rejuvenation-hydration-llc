import React from 'react'
import styled from 'styled-components';

const IVtitle = () => {
  return (
      <Container>
          <h1>IV Therapy</h1>
          <h3 style={{color: 'gray'}}>
              Going out? Good, enjoy it! We’ve go your back. We will have you
              back to normal in no time. You don’t even have to leave your
              house, we come to you!
          </h3>
          <h3 style={{color: 'gray'}}>
              IV therapy goes beyond just hangover recovery. All around health,
              energy and wellness benefits! We bring hydration to you! 💧
          </h3>
          <h3 style={{color: 'gray'}}>
              Experience all the benefits of IV Therapy in the comfort of your
              own home.
          </h3>
          <h3 style={{color: '#62c4ea'}}>
              Select from one of the following options:
          </h3>
      </Container>
  );
}

export default IVtitle

const Container = styled.div`
    /* min-height: calc(90vh - 70px); */
    padding: 70px;
    /* background-color: aliceblue; */
`;