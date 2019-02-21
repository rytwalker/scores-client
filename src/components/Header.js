import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

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
  background-color: #2f2e2e;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1020px) {
      justify-content: space-between;
    }
  }

  h1 {
    font-family: 'Lobster Two', cursive;
    color: #fafafa;
    font-size: 5rem;
  }
`;

export default Header;
