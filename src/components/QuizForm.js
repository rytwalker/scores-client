import React, { Component } from 'react';
import styled from 'styled-components';
import QuizFormRow from './QuizFormRow';

class QuizForm extends Component {
  state = {};
  render() {
    return (
      <form className="View">
        <QuizFormRow />
      </form>
    );
  }
}

export default QuizForm;
