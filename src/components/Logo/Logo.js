import React from 'react';
import styled from 'react-emotion';

import logo from './logo.svg'

const Logo = styled('div')`
  display: flex;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  white-space: nowrap;
  text-decoration: none;
  align-items: center;
`;

const LogoImg = styled('div')`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  background-color: #fff200;
  background-image: url('${props => props.src}');
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: right 1px bottom 2px;
`;

const Conf = styled('span')`
  color: #fff200;
`;

const JSConfLogo = () => (
  <Logo>
    <LogoImg src={logo} />
    <span>js</span><Conf>conf</Conf><span>.am</span>
  </Logo>

);

export default JSConfLogo;
