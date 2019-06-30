import React from 'react';
import { useTransition } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeaderboardKey from './LeaderboardKey';
import './styles.css';
import Team from './Team';

const Teams = ({ teams }) => {
  let height = 0;
  const mappedTeams = teams.map(data => ({
    ...data,
    y: (height += 10) - 10
  }));

  const transitions = useTransition(
    mappedTeams,
    mappedTeams => mappedTeams.id,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, height: 80, opacity: 1 }),
      update: ({ y }) => ({ y, height: 80 })
    }
  );
  let rank;
  return (
    <StyledTeamList>
      <LeaderboardKey />
      {transitions.map(({ item, props: { y, ...rest }, key }, index) => {
        if (index === 0) {
          rank = index + 1;
        } else if (
          Math.ceil(teams[index - 1].average_score) ===
          Math.ceil(item.average_score)
        ) {
          // eslint-disable-next-line
          rank = rank;
        } else {
          rank = index + 1;
        }
        return (
          <Team
            key={key}
            team={item}
            rank={index + 1}
            styles={{
              zIndex: teams.length - index,
              transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
              ...rest
            }}
          />
        );
      })}
    </StyledTeamList>
  );
};

const StyledTeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

Teams.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Teams;
