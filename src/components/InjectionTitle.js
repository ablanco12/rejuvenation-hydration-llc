import React from 'react'
import styled from 'styled-components'

const InjectionTitle = () => {
  return (
      <Container>
          <h1>Injection Therapy</h1>
          <h3 style={{color: 'gray'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              mattis enim ut tellus elementum sagittis. In aliquam sem fringilla
              ut.
          </h3>
          <h3 style={{color: 'gray'}}>
              Experience all the benefits of Injection Therapy in the comfort of
              your own home.
          </h3>
          <h3 style={{color: '#62c4ea'}}>
              Select from one of the following options:
          </h3>
      </Container>
  );
}

export default InjectionTitle

const Container = styled.div`
    /* min-height: calc(90vh - 70px); */
    padding: 70px;
    /* background-color: aliceblue; */
`;