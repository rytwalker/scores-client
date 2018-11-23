import React, { Component } from 'react';
import styled from 'styled-components';

const StyledQuizRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(10, 1fr);
  align-items: end;
  width: 100%;
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  &:nth-child(odd) {
    background: #dfe6e9;
  }
  .round {
    input {
      width: 50%;
      border: none;
      padding: 0.5rem 0.25rem;
    }
    button {
      border: none;
      padding: 0.5rem;
    }
  }
`;

class QuizFormRow extends Component {
  state = {
    total: 0,
    rounds: [0, 0, 0, 0, 0, 0, 0, 0]
  };

  updateTotal = (rounds = this.state.rounds) => {
    const totalScore = rounds.reduce((acc, current) => acc + current);
    this.setState({ total: totalScore, rounds });
  };

  updateRound = (index, e) => {
    const updatedScore = parseInt(e.target.value);
    const rounds = [...this.state.rounds];
    rounds[index] = updatedScore;
    this.updateTotal(rounds);
  };

  render() {
    const { total, rounds } = this.state;
    return (
      <StyledQuizRow>
        <span className="rank">1.</span>
        <span className="team-name">The team name</span>
        <span className="total">{total}</span>
        {rounds.map((round, index) => (
          <div className="round" key={index}>
            <input type="number" onBlur={e => this.updateRound(index, e)} />
            <button>J</button>
          </div>
        ))}
      </StyledQuizRow>
    );
  }
}

export default QuizFormRow;
