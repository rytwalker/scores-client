import React from 'react';
import styled from 'styled-components';
import SortButton from './SortButton';
import { colors } from 'Utilities';

const SortBar = ({
  currentFilter,
  sorts: {
    sortByAverageCorrect,
    sortByAverageScore,
    sortByGamesPlayed,
    sortByMostWins,
    sortByMostTop3
  }
}) => {
  return (
    <StyledSortBar>
      <Container>
        <h4>Sort by:</h4>
        <SortButton
          currentFilter={currentFilter}
          filter="AVERAGE_SCORE"
          handleClick={sortByAverageScore}
        >
          Average Score
        </SortButton>
        <SortButton
          currentFilter={currentFilter}
          filter="AVERAGE_CORRECT"
          handleClick={sortByAverageCorrect}
        >
          % Correct
        </SortButton>
        <SortButton
          currentFilter={currentFilter}
          filter="MOST_WINS"
          handleClick={sortByMostWins}
        >
          Most Wins
        </SortButton>
        <SortButton
          currentFilter={currentFilter}
          filter="MOST_TOP3"
          handleClick={sortByMostTop3}
        >
          Most Top 3
        </SortButton>
        <SortButton
          currentFilter={currentFilter}
          filter="GAMES_PLAYED"
          handleClick={sortByGamesPlayed}
        >
          Games Played
        </SortButton>
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

export default SortBar;
