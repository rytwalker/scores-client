import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from 'Utilities';
const BarChart = require('react-chartjs').Radar;

class Card extends Component {
  getLatestScores = scores => {
    const latestScores = [];
    let loopLength;

    if (scores.length >= 3) {
      loopLength = 3;
    } else if (scores.length === 2) {
      loopLength = 2;
    }
    if (loopLength) {
      for (let i = 0; i < loopLength; i++) {
        latestScores.push(scores[i]);
      }
    } else {
      latestScores.push(scores[0]);
    }
    return latestScores;
  };
  render() {
    const { team } = this.props;
    const roundData = {
      labels: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'],
      datasets: [
        {
          label: 'Average Points Per Round',
          fillColor: 'rgba(181, 232, 213, 0.5)',
          strokeColor: 'rgba(181, 232, 213, 0.8)',
          highlightFill: 'rgba(181, 232, 213, 0.75)',
          highlightStroke: 'rgba(181, 232, 213, 1)',
          data: [
            Math.round(team.average_r1_score),
            Math.round(team.average_r2_score),
            Math.round(team.average_r3_score),
            Math.round(team.average_r4_score),
            Math.round(team.average_r5_score),
            Math.round(team.average_r6_score),
            Math.round(team.average_r7_score),
            Math.round(team.average_r8_score)
          ]
        }
      ]
    };
    return (
      <>
        <CardHeader>
          <CardContainer>
            <h2>{team.team_name}</h2>
          </CardContainer>
        </CardHeader>
        <CardContainer>
          <CardBody>
            <CardHalf>
              <h3 style={{ margin: 0, marginBottom: '1rem' }}>
                Average Points Per Round:
              </h3>
              {/* A new chart is in town */}
              <BarChart data={roundData} height="200" />
              <h3 style={{ marginBottom: '1rem' }}>Latest Scores:</h3>
              <LatestScores>
                {this.getLatestScores(team.scores).map(score => (
                  <div className="container">
                    <div className="score">{score.total_points_scored}</div>
                    <div className="date">{score.quiz}</div>
                  </div>
                ))}
              </LatestScores>
            </CardHalf>
            <CardHalf>
              <StatsPlaced>
                <h3>#winning</h3>
                <div className="medal">
                  {team.first_place}
                  <span role="img" aria-label="first-place">
                    🥇
                  </span>
                </div>
                <div className="medal">
                  {team.second_place}
                  <span role="img" aria-label="second-place">
                    🥈
                  </span>
                </div>
                <div className="medal">
                  {team.third_place}
                  <span role="img" aria-label="third-place">
                    🥉
                  </span>
                </div>
              </StatsPlaced>
              <StatsPlaced>
                <div className="basic-stats">
                  <span className="green">{Math.ceil(team.average_score)}</span>
                  points average score
                </div>
                <div className="basic-stats">
                  <span className="green">
                    {Math.round(team.average_percent_correct)}%
                  </span>
                  average % correct
                </div>
                <div className="basic-stats">
                  <span className="green">{team.games_played}</span>
                  {team.games_played === 1 ? 'quiz played' : 'quizzes played'}
                </div>
              </StatsPlaced>
              <StatsPlaced>
                <h4>Personal Bests</h4>
                <div className="basic-stats sm">
                  <span className="green">{team.high_score}</span>
                  <span role="img" aria-label="medal">
                    🏅
                  </span>
                  high score
                </div>
                {/* <div className="basic-stats sm">
                  <span className="green">R2</span>
                  <span role="img" aria-label="best-round">
                    🎵
                  </span>
                  best round
                </div>
                <div className="basic-stats sm">
                  <span className="green">Geography</span>
                  <span role="img" aria-label="best-topic">
                    🗺
                  </span>
                  best topic
                </div> */}
              </StatsPlaced>
            </CardHalf>
          </CardBody>
        </CardContainer>
      </>
    );
  }
}

// const StyledCard = styled.div`
//   ${'' /* Card */}
// `;
const CardContainer = styled.div`
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
`;

const CardHeader = styled.header`
  background: ${colors.black};
  color: ${colors.white};
  height: 70px;
  margin-bottom: 2rem;
`;
const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const CardHalf = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 900px) {
    width: 48%;
  }
  .placeholder {
    width: 100%;
    height: 225px;
    background: #eee;
  }
`;

const LatestScores = styled.div`
  display: flex;
  justify-content: space-between;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .date {
      /* font-weight: 700; */
      font-size: 1.2rem;
    }
    .score {
      color: ${colors.primaryDark};
      border: 1px solid ${colors.primaryDark};
      border-radius: 4px;
      padding: 2rem;
      font-size: 2rem;
    }
  }
`;

const StatsPlaced = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  h3,
  h4 {
    width: 100%;
    font-family: 'Lobster Two', cursive;
    text-decoration: underline;
    margin: 0;
    margin-bottom: 1rem;
  }
  /* h4 {
    font-size: ;
  } */

  .medal {
    color: ${colors.primaryDark};
    span {
      margin-left: 0.7rem;
    }
  }
  .basic-stats {
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 4px;
    background: ${colors.primaryLight};
    padding: 1rem;
    font-size: 1.6rem;
    .green {
      color: ${colors.primaryDark};
      margin-right: 1rem;
      font-size: 2rem;
    }
  }
  .sm {
    /* font-size: 1.8rem; */
    margin-bottom: 0.7rem;
  }
`;

export default Card;
