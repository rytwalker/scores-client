import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 20%;
  background: #2d3436;
  color: #fff;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

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
  .admin-link {
    color: #fff;
    text-decoration: none;
    display: block;
    text-align: center;
    margin-top: auto;
    transition: all 0.2s;
    padding-bottom: 2rem;

    &:hove {
      color: #74b9ff !important;
      background: none !important;
    }
  }
  .active-admin {
    color: #74b9ff !important;
    background: none !important;
  }
`;
