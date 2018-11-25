import styled from 'styled-components';

export const StyledNewTeamForm = styled.div`
  padding: 2rem;
  background: #2d3436;
  display: flex;
  align-items: center;

  input {
    padding: 1rem;
    margin-right: 1rem;
    border: none;
    border-radius: 5px;
    font-size: inherit;
  }

  .id-input {
    width: 50px;
  }

  button {
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    background: #fff;
    font-size: inherit;
    cursor: pointer;
  }

  .teams-count {
    color: #fff;
    margin-left: auto;
  }
`;
