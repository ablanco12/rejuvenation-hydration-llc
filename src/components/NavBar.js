import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

function NavBar() {
  return (
    <NavContainer>
        <a href='/'>
            <Logo src="/images/RHLogo1.PNG" />
        </a>

        <NavMenu>
            <a href='/'>
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
            </a>
            <a href='/services'>
                <img src="/images/search-icon.svg" alt="" />
                <span>SERVICES</span>
            </a>
            
            <a href='/aboutme'>
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>ABOUT US</span>
            </a>
            <Popup trigger={<a>
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>CONTACT US</span>
                </a>} 
                position="right center">
                <h3>✆ : +1 (702) 526-3683</h3>
            </Popup>
            
        </NavMenu>
    </NavContainer>
  )
}

export default NavBar

const Logo = styled.img`
    width: 60px;

`
const NavContainer = styled.nav`
    height: 70px;
    /* background: #090b13; */
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

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
`