import React, { Component } from 'react';
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
  }
`;

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <StyledSidebar>
        <h1>Scores</h1>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
