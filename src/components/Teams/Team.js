import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import { Toggle } from '../Utilities';

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
                  {team.teamName}
                </span>
                <Modal on={on} toggle={toggle}>
                  <StyledTeamCard>
                    <div className="card-header">
                      <div className="card-container">
                        <h2>{team.teamName}</h2>
                      </div>
                    </div>
                  </StyledTeamCard>
                </Modal>
              </>
            )}
          </Toggle>

          <span className="average-score num">
            {Math.ceil(team.averageScore)}
          </span>
          <span className="games-played num hidden">{team.gamesPlayed}</span>
          <span className="score-percent num hidden">
            {Math.round(team.averagePercentCorrect)}%
          </span>
        </div>
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

const StyledTeamCard = styled.div`
  .card-header {
    background: #2f2e2e;
    color: #fafafa;
    height: 70px;
    .card-container {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        margin: 0;
      }
    }
  }
`;

const StyledTeam = styled.li`
  &:nth-child(even) {
    background: #d5eee5;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    padding: 3rem;
    font-size: 2.4rem;
    font-weight: 700;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
      width: 95%;
      margin: 0 auto;
    }
    @media (min-width: 1200px) {
      width: 85%;
      font-size: 2.8rem;
    }
  }
  .team-name {
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: #a5d2c1;
      text-decoration: underline;
      ${'' /* background: #a5d2c1; */}
    }
  }
  .num {
    font-size: 3rem;
    justify-self: center;

    @media (min-width: 1200px) {
      font-size: 3.4rem;
    }
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
    @media (min-width: 1200px) {
      height: 8rem;
      width: 8rem;
      font-size: 4rem;
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
