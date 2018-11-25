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
      padding: 0.5rem 1rem;
      background: #b2bec3;
      color: inherit;
      outline: 0;
      cursor: pointer;
    }
  }
  .jokered {
    background: #0984e3 !important;
    color: #fff !important;
  }
`;

class QuizFormRow extends Component {
  state = {
    total: 0,
    rounds: [0, 0, 0, 0, 0, 0, 0, 0],
    isJokered: false
  };

  updateTotal = (rounds = this.state.rounds) => {
    const totalScore = rounds.reduce((acc, current) => acc + current);
    this.setState({ total: totalScore, rounds });
  };

  updateRound = (index, e) => {
    const updatedScore = parseInt(e.target.value);
    if (updatedScore >= 0 && updatedScore <= 16) {
      const rounds = [...this.state.rounds];
      rounds[index] = updatedScore;
      this.updateTotal(rounds);
    } else {
      e.target.value = '';
    }
  };

  activateJoker = e => {
    e.preventDefault();
    if (!this.state.isJokered) {
      e.target.classList.toggle('jokered');
      // parseInt(e.target.previousSibling.value) * 2;
      // this.updateRound();
    }
  };

  render() {
    const { total, rounds, isJokered } = this.state;
    const { initalRank, teamName } = this.props;
    return (
      <StyledQuizRow>
        <span className="rank">{initalRank}.</span>
        <span className="team-name">{teamName}</span>
        <span className="total">{total}</span>
        {rounds.map((round, index) => (
          <div className="round" key={index}>
            <input type="number" onBlur={e => this.updateRound(index, e)} />
            <button onClick={this.activateJoker}>J</button>
          </div>
        ))}
      </StyledQuizRow>
    );
  }
}

export default QuizFormRow;
