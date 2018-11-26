import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addingTeam, updatingTotalScore } from '../../actions';
import { StyledNewTeamForm } from '../../styles/StyledNewTeamForm';
import ScorecardRow from './ScorecardRow';

class Scorecard extends Component {
  state = {
    teams: [
      {
        id: 0,
        teamName: 'Im Too Old',
        total: 0,
        rounds: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    nameValue: '',
    idValue: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewTeam = e => {
    e.preventDefault();
    const { nameValue, idValue } = this.state;
    const { addingTeam } = this.props;
    const team = {
      id: idValue,
      teamName: nameValue,
      total: 0,
      rounds: [0, 0, 0, 0, 0, 0, 0, 0]
    };
    addingTeam(team);
    this.setState({ nameValue: '', idValue: '' });
  };

  handleInputBlur = team => {
    this.props.updatingTotalScore(team);
  };

  render() {
    const { nameValue, idValue } = this.state;
    const { teams } = this.props;
    return (
      <form className="View">
        <StyledNewTeamForm>
          <input
            type="text"
            value={nameValue}
            name="nameValue"
            onChange={this.handleInputChange}
            placeholder="Team name..."
          />
          <input
            type="text"
            value={idValue}
            name="idValue"
            onChange={this.handleInputChange}
            placeholder="Id"
            className="id-input"
          />
          <button onClick={this.handleNewTeam}>+</button>
          <div className="teams-count">Teams: {teams.length}</div>
        </StyledNewTeamForm>
        {teams.map((team, index) => (
          <ScorecardRow
            team={team}
            rank={index + 1}
            key={team.id}
            handleInputBlur={this.handleInputBlur}
          />
        ))}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.scoresheet.teams
  };
};

export default connect(
  mapStateToProps,
  { addingTeam, updatingTotalScore }
)(Scorecard);
