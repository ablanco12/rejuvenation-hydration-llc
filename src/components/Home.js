import styled from 'styled-components'
import Services from './Services'
import Header from './Header'

function Home() {
    

  return (
    <Container>
      <Header />
        <Services />
    </Container>
  )
}


export default Home

const Container = styled.div`
    min-height: calc(90vh - 70px);
    /* padding: 0 calc(3.5vw + 5px); */
    position: relative;
    overflow-x: hidden;
    width: 100%;

    &:before {
        /* background: url("/images/home-background.png") center center / cover no-repeat fixed; */
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`