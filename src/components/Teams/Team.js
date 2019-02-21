import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTeam = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: 3rem;
  font-size: 2.4rem;
  font-weight: 700;
  &:nth-child(even) {
    background: #d5eee5;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  }
  .num {
    font-size: 3rem;
    justify-self: center;
  }
  .average-score {
    color: #d5eee5;
    background: #a5d2c1;
    height: 6rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-align: center;
  }
  .hidden {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

class Team extends Component {
  state = { reduceTextSize: false };
  render() {
    const { reduceTextSize } = this.state;
    let { team, rank } = this.props;

    if (rank === 1) {
      rank = '🥇';
    } else if (rank === 2) {
      rank = '🥈';
    } else if (rank === 3) {
      rank = '🥉';
    } else {
      rank = rank + '.';
    }

    // if (team.teamName.length >= 20) {
    //   this.setState({ reduceTextSize: true });
    // }

    return (
      <StyledTeam>
        <span className="rank">{rank}</span>
        <span
          className="team-name"
          style={reduceTextSize ? { fontSize: '2rem' } : null}
        >
          {team.teamName}
        </span>
        <span className="average-score num">
          {Math.ceil(team.averageScore)}
        </span>
        <span className="games-played num hidden">{team.gamesPlayed}</span>
        <span className="score-percent num hidden">
          {Math.round(team.averagePercentCorrect)}%
        </span>
      </StyledTeam>
    );
  }
}

Team.propTypes = {
  team: PropTypes.shape({
    teamId: PropTypes.number.isRequired,
    teamName: PropTypes.string.isRequired,
    gamesPlayed: PropTypes.string.isRequired,
    averagePercentCorrect: PropTypes.number.isRequired
  }).isRequired
};

export default Team;
