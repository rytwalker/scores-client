import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

const Footer = () => {
  return (
    <StyledFooter>
      <Navigation footer />
      <div className="copy">Made by Ryan Walker © 2019</div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 67px;
  width: 100%;
  background-color: #2f2e2e;
  position: fixed;
  bottom: 0;
  @media (min-width: 1020px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
  }

  .copy {
    display: none;
    @media (min-width: 1040px) {
      display: block;
      color: #fafafa;
    }
  }
`;

export default Footer;
