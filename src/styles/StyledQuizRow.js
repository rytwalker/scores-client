import styled from 'styled-components';

export const StyledQuizRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(10, 1fr);
  align-items: end;
  width: 100%;
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  &:nth-child(odd) {
    background: #dfe6e9;
  }
  .round {
    input {
      width: 50%;
      border: 1px solid #b2bec3;
      padding: 0.5rem 0.25rem;
    }
    button {
      border: none;
      padding: 0.5rem 1rem;
      background: #b2bec3;
      color: inherit;
      outline: 0;
      border: 1px solid #b2bec3;
      cursor: pointer;
    }
  }
  .jokered {
    background: #0984e3 !important;
    color: #fff !important;
    border-color: #0984e3 !important;
  }
`;
