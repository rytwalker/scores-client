import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThList,
  faQuestionCircle,
  faTrophy,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component {
  render() {
    return (
      <StyledNavigation footer={this.props.footer} header={this.props.header}>
        <NavLink className="leaderboard-link" exact to="/">
          <FontAwesomeIcon icon={faTrophy} />
          <span className="link-text">Leaderboard</span>
        </NavLink>
        <NavLink className="quizzes-link" exact to="/quiz/:id">
          <FontAwesomeIcon icon={faThList} />
          <span className="link-text">Quizzes</span>
        </NavLink>
        <NavLink className="teams-link" exact to="/new-quiz">
          <FontAwesomeIcon icon={faUsers} />
          <span className="link-text">Teams</span>
        </NavLink>
        <NavLink className="about-link" to="/about">
          <FontAwesomeIcon icon={faQuestionCircle} />{' '}
          <span className="link-text">About</span>
        </NavLink>
      </StyledNavigation>
    );
  }
}

const StyledNavigation = styled.nav`
  height: 100%;
  display: ${props => (props.header ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1020px) {
    display: ${props => (props.footer ? 'none' : 'flex')};
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 2.8rem;
    color: #fafafa;
    transition: all 0.2s;
    text-decoration: none;

    @media (min-width: 1020px) {
      padding: 0 1rem;
      border-bottom: 5px solid rgba(255, 255, 255, 0);
    }
    &:hover {
      background-color: #555;
      border-bottom: 5px solid #b5e8d5;
    }
    .link-text {
      display: none;
      @media (min-width: 1020px) {
        display: inline;
        font-size: 2.4rem;
        text-transform: uppercase;
        margin-left: 1rem;
        color: #b5e8d5;
        text-decoration: none;
        border-bottom: none;
      }
    }
  }
  .leaderboard-link:hover {
    color: #f9db79;
  }
  .quizzes-link:hover {
    color: #b5e8d5;
  }
  .teams-link:hover {
    color: #2f2e2e;
  }
  .about-link:hover {
    color: #dc000b;
  }

  .active {
    color: #f9db79;
    @media (min-width: 1020px) {
      ${'' /* background-color: #555; */}
      border-bottom: 5px solid #b5e8d5;
    }
  }
`;

export default Navigation;
