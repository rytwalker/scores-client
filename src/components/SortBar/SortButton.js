import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'Utilities';

const SortButton = ({ currentFilter, filter, handleClick, children }) => {
  const [active, setActive] = useState(filter === currentFilter ? true : false);
  const click = () => {
    handleClick();
    setActive(filter === currentFilter ? true : false);
  };
  return (
    <StyledSortButton active={active} onClick={click}>
      {children}
    </StyledSortButton>
  );
};

const StyledSortButton = styled.div`
  border: 1px solid ${colors.primaryDark};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => (props.active ? colors.primary : colors.white)};
  &:hover {
    background: ${colors.primary};
  }
`;

export default SortButton;
