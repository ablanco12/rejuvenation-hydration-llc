import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from './Hero'
import Services from './Services'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setProducts } from '../features/products/productSlice'
// import Footer from './Footer'

function Home() {
    const dispatch = useDispatch();

  useEffect(()=>{
    db.collection("products").onSnapshot((snapshot)=>{
        let tempProducts = snapshot.docs.map((doc)=>{
          // console.log(doc.data());
          return {id: doc.id, ...doc.data()}
        })
        dispatch(setProducts(tempProducts));
    })
  })

  return (
    <Container>
        <Hero />
        <Services />
    </Container>
  )
}


export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

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