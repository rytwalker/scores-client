import React, { Component } from 'react';
import styled from 'styled-components';
import QuizFormRow from './QuizFormRow';

class QuizForm extends Component {
  state = {
    teams: [{ id: 0, teamName: 'Im Too Old' }],
    nameValue: '',
    idValue: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewTeam = e => {
    e.preventDefault();
    const { nameValue, idValue } = this.state;
    const teams = [...this.state.teams, { id: idValue, teamName: nameValue }];
    this.setState({ teams, idValue: '', nameValue: '' });
  };

  render() {
    const { teams, nameValue, idValue } = this.state;
    return (
      <form className="View">
        <div className="NewTeamForm">
          <input
            type="text"
            value={nameValue}
            name="nameValue"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            value={idValue}
            name="idValue"
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleNewTeam}>+</button>
        </div>
        {teams.map((team, index) => (
          <QuizFormRow
            teamName={team.teamName}
            initalRank={index + 1}
            key={team.id}
          />
        ))}
      </form>
    );
  }
}

export default QuizForm;
