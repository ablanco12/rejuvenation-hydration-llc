import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Banner></Banner>
      <NavContainer>
        <Link to="/">
          <Logo src="/images/RHLogo1.PNG" />
        </Link>
        <NavMenu>
          <Link to="/">
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
          </Link>
          <Link to="/services">
            <img src="/images/search-icon.svg" alt="" />
            <span>SERVICES</span>
          </Link>

          <Link to="/aboutme">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>ABOUT ME</span>
          </Link>
          <Popup
            trigger={
              <Link>
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>CONTACT ME</span>
              </Link>
            }
            position="right center"
          >
            <h3>✆ : +1 (702) 526-3683</h3>
          </Popup>
        </NavMenu>
      </NavContainer>
    </div>
  );
}

export default NavBar;

const Logo = styled.img`
  width: 60px;
`;
const NavContainer = styled.nav`
  /* height: 70px; */
  /* background: #090b13; */
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  position: fixed;
  z-index: 100;
  /* margin-left: 10%; */
`;
const Banner = styled.div`
  height: 10px;
  background: #62c4ea;
  display: flex;
  width: 100%;
  /* padding: 0 36px; */
  overflow-x: hidden;
  position: fixed;
  z-index: 100;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 17px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #62c4ea;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
