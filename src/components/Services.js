import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectProducts } from "../features/product/productSlice";
import { useSelector } from "react-redux";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setProducts } from "../features/product/productSlice";

function Services() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setProducts(tempProducts));
    });
  });
  return (
    <Container>
      <ServiceTitle>
        <h1>Mobile IV & Injection Services</h1>
        <h3>
          Rejuvenation Hydration offers a variety of at-home services, please
          see below:
        </h3>
      </ServiceTitle>
      <ServiceTitle>
        <h1>IV Therapy</h1>
        <h3 style={{ color: "gray" }}>
          Experience all the benefits of IV Therapy in the comfort of your own
          home.
        </h3>
        <h3 style={{ color: "#62c4ea" }}>
          Select from one of the following options:
        </h3>
      </ServiceTitle>

      <Content>
        {products &&
          products.map((product) => (
            <Wrap key={product.id}>
              <Link
                to={`/details/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img src={product.cardImg} alt="" />
                <h3>{product.productTitle}</h3>
                <Button>Book Now</Button>
              </Link>
            </Wrap>
          ))}
      </Content>
      <footer>_________________________</footer>
    </Container>
  );
}

export default Services;

const Container = styled.div`
  padding: 0 20%;
`;

const Content = styled.div`
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

const ServiceTitle = styled.div`
  padding: 70px;
`;
