import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectImgs } from "../features/img/imgSlice";
import { useSelector } from "react-redux";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setImgs } from "../features/img/imgSlice";


function AboutMe() {
    const imgs = useSelector(selectImgs);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("imgs").onSnapshot((snapshot) => {
      let tempImgs = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setImgs(tempImgs));
    });
  });
  return (
<>
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
      
            <Container2>


          <Content>
              {imgs &&
                  imgs.map((img) => (
                      <Wrap key={img.id}>
                          <Link
                              to={`/details/${img.id}`}
                              style={{textDecoration: 'none', color: 'black'}}>
                              <img src={img.cardImg} alt='' />
                              <h3>{img.imgTitle}</h3>
                              <Button>Book Now</Button>
                          </Link>
                      </Wrap>
                  ))}
          </Content>

      </Container2>

      </>

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






const Container2 = styled.div`
    min-height: calc(90vh - 70px);
    padding: 0 20%;
    background-color: aliceblue;
`;

const Content = styled.div`
padding-bottom: 70px;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const Wrap = styled.div`
  text-decoration: none;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  /* overflow: hidden; */
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0, 0, 0) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    /* height: 70%; */
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(75, 164, 245) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Button = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 10px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  /* background-color: rgba(0, 0, 0, 0.6); */
  transition: all 0.2s ease 0s;
  cursor: pointer;
  /* width: 50%; */

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;