import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('AVERAGE_SCORE');

  const isActive = filter => {
    return activeTab === filter;
  };

  const setActive = filter => {
    setActiveTab(filter);
  };

  return (
    <StyledSortBar>
      <Container>
        <h4>Sort by:</h4>
        <SortButton
          isActive={isActive}
          filter="AVERAGE_SCORE"
          handleClick={sortByAverageScore}
          setActiveTab={setActive}
        >
          Average Score
        </SortButton>
        <SortButton
          isActive={isActive}
          filter="AVERAGE_CORRECT"
          handleClick={sortByAverageCorrect}
          setActiveTab={setActive}
        >
          % Correct
        </SortButton>
        <SortButton
          isActive={isActive}
          filter="MOST_WINS"
          handleClick={sortByMostWins}
          setActiveTab={setActive}
        >
          Most Wins
        </SortButton>
        <SortButton
          isActive={isActive}
          filter="MOST_TOP3"
          handleClick={sortByMostTop3}
          setActiveTab={setActive}
        >
          Most Top 3
        </SortButton>
        <SortButton
          isActive={isActive}
          currentFilter={currentFilter}
          filter="GAMES_PLAYED"
          handleClick={sortByGamesPlayed}
          setActiveTab={setActive}
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
  margin-top: 1.5rem;
`;

const Container = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 4px;
  position: sticky;
  top: 0;
  width: 100%;
`;

export default SortBar;
