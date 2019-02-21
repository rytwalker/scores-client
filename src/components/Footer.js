import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThList,
  faQuestionCircle,
  faTrophy,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <StyledFooter>
      <nav className="footer-nav">
        <NavLink className="leaderboard-link" exact to="/">
          <FontAwesomeIcon icon={faTrophy} />
        </NavLink>
        <NavLink className="quizzes-link" exact to="/quiz/:id">
          <FontAwesomeIcon icon={faThList} />
        </NavLink>
        <NavLink className="teams-link" exact to="/new-quiz">
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
        <NavLink className="about-link" to="/about">
          <FontAwesomeIcon icon={faQuestionCircle} />{' '}
        </NavLink>
      </nav>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 67px;
  width: 100%;
  background-color: #2f2e2e;
  position: fixed;
  bottom: 0;
  .footer-nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      font-size: 3.2rem;
      color: #fafafa;
      transition: all 0.2s;
      &:hover {
        background-color: #555;
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
    }
  }
`;

export default Footer;
