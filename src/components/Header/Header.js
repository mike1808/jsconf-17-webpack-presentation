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
  z-index: 1;
`;

const Me = styled('div')`
`;

const MeLink = styled('a')`
  color: white;
`;


const Header = () => (
  <Container>
    <Logo />
    <div>Yerevan, Armenia 2017</div>
    <Me><MeLink href="http://mmanukyan.io" target="_blank">Mikael Manukyan</MeLink></Me>
  </Container>
);

export default Header;
