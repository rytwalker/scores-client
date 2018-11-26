import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSidebar } from '../styles/StyledSidebar';

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <StyledSidebar>
        <h1>Suzie's Scores</h1>
        <NavLink exact to="/" className="sidebar-btn">
          Leaderboard
        </NavLink>
        <NavLink to="/quiz/4" className="sidebar-btn">
          Quizzes
        </NavLink>
        <NavLink to="/about" className="sidebar-btn">
          About
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="admin-link"
          activeClassName="active-admin"
        >
          Admin Dashboard
        </NavLink>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
