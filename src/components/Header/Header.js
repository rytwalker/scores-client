import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import { colors, flexCenter } from 'Utilities';

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <h1>Suzie's Scores</h1>
        <Navigation header />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 90px;
  background-color: ${colors.black};
  .container {
    height: 100%;
    ${flexCenter()};
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1020px) {
      justify-content: space-between;
    }
  }

  h1 {
    font-family: 'Lobster Two', cursive;
    color: ${colors.white};
    font-size: 5rem;
  }
`;

export default Header;
