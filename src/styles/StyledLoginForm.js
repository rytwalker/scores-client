import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  width: 50%;
  padding: 2rem 3rem;
  margin: 0 auto;
  border: 1px solid #2d3436;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
    margin-bottom: 2rem;
    text-align: center;
  }

  input {
    margin-bottom: 2rem;
    padding: 1rem;
    font-size: inherit;
    border: 1px solid #2d3436;
    border-radius: 5px;
  }

  button {
    padding: 1rem;
    font-size: inherit;
    background: #0984e3;
    border: none;
    color: #fff;
    border-radius: 5px;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      background: #74b9ff;
    }
  }
`;
