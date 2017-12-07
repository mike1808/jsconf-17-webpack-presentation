import React from 'react';
import styled from 'react-emotion';

import Logo from '../Logo';

const Container = styled('div')`
  position: absolute;
  top: 0;
  width: 100vw;
  display: flex;
  background: grey;
  padding: 10px 5px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: 24px;
  color: #fff;
`;


const Footer = () => (
  <Container>
    <Logo />
    <div>Yerevan, Armenia 2017</div>
    <div>Mikael Manukyan</div>
  </Container>
);

export default Footer;
