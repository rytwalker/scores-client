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
        <NavLink to="/">
          <FontAwesomeIcon icon={faTrophy} />
        </NavLink>
        <NavLink exact to="/quiz/:id">
          <FontAwesomeIcon icon={faThList} />
        </NavLink>
        <NavLink exact to="/new-quiz">
          <FontAwesomeIcon icon={faUsers} />
        </NavLink>
        <NavLink to="/about">
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
      font-size: 4rem;
      color: #fafafa;
      transition: all 0.2s;
      &:hover {
        background-color: #555;
      }
    }

    .active {
      color: #f9db79;
    }
  }
`;

export default Footer;
