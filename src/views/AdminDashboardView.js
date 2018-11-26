import React, { Component } from 'react';
import { StyledLoginForm } from '../styles/StyledLoginForm';

class AdminDashboardView extends Component {
  state = {};
  render() {
    return (
      <div className="View login">
        <StyledLoginForm>
          <h3>Admin Login</h3>
          <input type="text" placeholder="username" disabled />
          <input type="password" placeholder="password" disabled />
          <button>Log in</button>
        </StyledLoginForm>
      </div>
    );
  }
}

export default AdminDashboardView;
