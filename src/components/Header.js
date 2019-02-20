import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Suzie's Scores</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 90px;
  background-color: #2f2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: 'Lobster Two', cursive;
    color: #fafafa;
    font-size: 5rem;
  }
`;

export default Header;
