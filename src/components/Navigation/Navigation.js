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
import { colors, flexCenter, transition } from 'Utilities';

class Navigation extends Component {
  render() {
    return (
      <StyledNavigation footer={this.props.footer} header={this.props.header}>
        <NavLink className="leaderboard-link" exact to="/">
          <FontAwesomeIcon icon={faTrophy} />
          <span className="link-text">Leaderboard</span>
        </NavLink>
        <NavLink className="quizzes-link" exact to="/quizzes">
          <FontAwesomeIcon icon={faThList} />
          <span className="link-text">Quizzes</span>
        </NavLink>
        <NavLink className="teams-link" exact to="/teams">
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
    ${flexCenter()}
    height: 100%;
    width: 100%;
    font-size: 2.8rem;
    color: ${colors.white};
    ${transition({})};
    text-decoration: none;

    @media (min-width: 1020px) {
      padding: 0 1rem;
      border-bottom: 5px solid rgba(255, 255, 255, 0);
    }
    &:hover {
      background-color: ${colors.blackFaded};
      border-bottom: 5px solid ${colors.primary};
    }
    .link-text {
      display: none;
      @media (min-width: 1020px) {
        display: inline;
        font-size: 2.4rem;
        color: ${colors.primary};
        text-transform: uppercase;
        text-decoration: none;
        border-bottom: none;
        margin-left: 1rem;
      }
    }
  }
  .leaderboard-link:hover {
    color: ${colors.gold};
  }
  .quizzes-link:hover {
    color: ${colors.primary};
  }
  .teams-link:hover {
    color: ${colors.black};
  }
  .about-link:hover {
    color: ${colors.red};
  }

  .active {
    color: ${colors.gold};
    @media (min-width: 1020px) {
      border-bottom: 5px solid ${colors.primary};
    }
  }
`;

export default Navigation;
