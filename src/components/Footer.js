import React from 'react';
import styled from 'styled-components';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterStyle>
            Rejuvenataion Hydration LLC, Copyright © {currentYear}
        </FooterStyle>
    );
}

export default Footer;



const FooterStyle = styled.div`
    bottom: 30px;
    width: 100%;
`;

