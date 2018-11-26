import React, { Component } from 'react';
import { StyledQuizRow } from '../../styles/StyledQuizRow';

class QuizFormRow extends Component {
  state = {
    isJokered: false
  };

  updateTotal = (rounds = this.props.team.rounds) => {
    const totalScore = rounds.reduce((acc, current) => acc + current);
    // this.setState({ total: totalScore, rounds });
    this.props.handleInputBlur({
      ...this.props.team,
      rounds,
      total: totalScore
    });
  };

  updateRound = (index, e) => {
    const { team } = this.props;
    const updatedScore = parseInt(e.target.value);
    if (updatedScore >= 0 && updatedScore <= 16) {
      const rounds = [...team.rounds];
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
    // const { isJokered } = this.state;
    const { rank, team } = this.props;
    return (
      <StyledQuizRow>
        <span className="rank">{rank}.</span>
        <span className="team-name">{team.teamName}</span>
        <span className="total">{team.total}</span>
        {team.rounds.map((round, index) => (
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
