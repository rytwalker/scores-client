import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import { colors, flexCenter } from 'Utilities';

const Footer = () => {
  return (
    <StyledFooter>
      <Navigation footer />
      <div className="copy">Made by Ryan Walker © 2019</div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  height: 67px;
  position: fixed;
  bottom: 0;
  background-color: ${colors.black};
  @media (min-width: 1020px) {
    ${flexCenter()};
    position: static;
  }

  .copy {
    display: none;
    @media (min-width: 1040px) {
      display: block;
      color: ${colors.white};
    }
  }
`;

export default Footer;
