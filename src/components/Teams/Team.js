import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { colors, flexCenter, Toggle } from 'Utilities';

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
        <div className="container">
          <span className="rank">{rank}</span>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <span
                  onClick={toggle}
                  className="team-name"
                  style={reduceTextSize ? { fontSize: '2rem' } : null}
                >
                  {team.team_name}
                </span>
                <Modal on={on} toggle={toggle}>
                  <Card team={team} />
                </Modal>
              </>
            )}
          </Toggle>

          <span className="average-score num">
            {Math.ceil(team.average_score)}
          </span>
          <span className="games-played num hidden">{team.games_played}</span>
          <span className="score-percent num hidden">
            {Math.round(team.average_percent_correct)}%
          </span>
        </div>
      </StyledTeam>
    );
  }
}

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    teamName: PropTypes.string.isRequired,
    gamesPlayed: PropTypes.string.isRequired,
    averagePercentCorrect: PropTypes.number.isRequired
  }).isRequired
};

const StyledTeam = styled.li`
  background: ${colors.white};
  margin-bottom: 1rem;
  border-radius: 4px;
  &:nth-child(even) {
    background: ${colors.primaryLight};
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 2rem;
    font-size: 2.4rem;
    font-weight: 900;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
      width: 95%;
      margin: 0 auto;
    }
    @media (min-width: 1200px) {
      width: 85%;
      font-size: 2.8rem;
      padding: 1.5rem;
    }
  }
  .team-name {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${colors.primaryDark};
      text-decoration: underline;
    }
  }
  .num {
    font-size: 3rem;
    justify-self: center;
    font-weight: 300;

    @media (min-width: 1200px) {
      font-size: 3.4rem;
    }
  }
  .average-score {
    color: ${colors.primaryLight};
    background: ${colors.primaryDark};
    height: 6rem;
    width: 6rem;
    ${flexCenter()};
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    @media (min-width: 1200px) {
      /* height: 8rem;
      width: 8rem; */
      /* font-size: 4rem; */
    }
  }
  .hidden {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export default Team;
