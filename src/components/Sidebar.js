import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 20%;
  background: #2d3436;
  color: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 6rem;
  }

  .sidebar-btn {
    color: #fff;
    background: #636e72;
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 3.6rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 2rem;
    transition: all 0.2s;

    &:hover {
      background: #74b9ff;
    }
  }
  .active {
    background: #74b9ff !important;
  }
`;

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <StyledSidebar>
        <h1>Suzie's Scores</h1>
        <NavLink exact to="/" className="sidebar-btn">
          Leaderboard
        </NavLink>
        <NavLink to="/latest-quiz" className="sidebar-btn">
          Quizzes
        </NavLink>
        <NavLink to="/about" className="sidebar-btn">
          About
        </NavLink>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
