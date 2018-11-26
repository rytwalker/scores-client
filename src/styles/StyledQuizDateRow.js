import styled from 'styled-components';

export const StyledQuizDateRow = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;

  .quiz-dates {
    font-size: 2.6rem;
    background: #fff;
    color: inherit;
    border: none;
    padding: 1rem;

    &:focus {
      outline-color: #2d3436;
      outline-style: dotted;
      outline-width: 1px;
      outline-offset: 5px;
    }
  }
`;
