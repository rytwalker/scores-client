import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from 'Utilities';
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeries
} from 'react-vis';

class Card extends Component {
  state = {};
  render() {
    return (
      <>
        <CardHeader>
          <CardContainer>
            <h2>Gnomies</h2>
          </CardContainer>
        </CardHeader>
        <CardContainer>
          <CardBody>
            <CardHalf>
              <FlexibleWidthXYPlot height={255}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <MarkSeries
                  data={[
                    { x: 1, y: 70, color: colors.primaryDark },
                    { x: 2, y: 69, color: colors.primaryDark },
                    { x: 3, y: 81, color: colors.primaryDark }
                  ]}
                />
                <XAxis title="Quizzes" />
                <YAxis title="Scores" />
              </FlexibleWidthXYPlot>
            </CardHalf>
            <CardHalf>
              <StatsPlaced>
                <h3>#winning</h3>
                <div className="medal">
                  3
                  <span role="img" aria-label="first-place">
                    🥇
                  </span>
                </div>
                <div className="medal">
                  5
                  <span role="img" aria-label="second-place">
                    🥈
                  </span>
                </div>
                <div className="medal">
                  8
                  <span role="img" aria-label="third-place">
                    🥉
                  </span>
                </div>
              </StatsPlaced>
              <StatsPlaced>
                <div className="basic-stats">
                  <span className="green">70</span>
                  points average score
                </div>
                <div className="basic-stats">
                  <span className="green">78%</span>
                  average number correct
                </div>
                <div className="basic-stats">
                  <span className="green">24</span>
                  quizzes played
                </div>
              </StatsPlaced>
              <StatsPlaced>
                <h4>Personal Bests</h4>
                <div className="basic-stats sm">
                  <span className="green">83</span>
                  <span role="img" aria-label="medal">
                    🏅
                  </span>
                  high score
                </div>
                <div className="basic-stats sm">
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
                </div>
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
    .green {
      color: ${colors.primaryDark};
      margin-right: 1rem;
    }
  }
  .sm {
    font-size: 1.8rem;
    margin-bottom: 0.7rem;
  }
`;

export default Card;
