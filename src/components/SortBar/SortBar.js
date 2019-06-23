import React from 'react';
import styled from 'styled-components';
import { colors } from 'Utilities';

const SortBar = () => {
  return (
    <StyledSortBar>
      <Container>
        <h4>Sort by:</h4>
        <SortButton>Average Score</SortButton>
        <SortButton>% Correct</SortButton>
        <SortButton>Most Wins</SortButton>
        <SortButton>Most Top 3</SortButton>
      </Container>
    </StyledSortBar>
  );
};

const StyledSortBar = styled.div`
  /* background: ${colors.white};
  padding: 2rem; */
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 4px;
  position: fixed;
`;

const SortButton = styled.div`
  border: 1px solid ${colors.primaryDark};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${colors.primary};
  }
`;

export default SortBar;
