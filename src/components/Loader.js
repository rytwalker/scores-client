import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../img/logo.svg';

const Loader = () => {
  return (
    <StyledLoader>
      <img src={logo} alt="Suzie's Scores Logo" />
      {/* <Loader type="ball-pulse" color="#B5E8D5" /> */}
      <div className="loading-balls-container">
        <div className="loader-ball one" />
        <div className="loader-ball two" />
        <div className="loader-ball three" />
      </div>
    </StyledLoader>
  );
};

const grow = keyframes`
  0% {
    transform: scale(.3);
  }

  75% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledLoader = styled.div`
  display: flex;
  min-height: calc(100vh - 157px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .loading-balls-container {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    width: 100px;
    .loader-ball {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background-color: #2f2e2e;
    }
    .one {
      animation: ${grow} 0.75s 0s ease-in infinite;
      ${'' /* animation-duration: .8s; */}
    }
    .two {
      animation: ${grow} 0.75s 0s ease-in infinite;
      animation-delay: -0.1s;
      ${'' /* animation-duration: 1.3s; */}
    }
    .three {
      animation: ${grow} 0.75s 0s ease-in infinite;
      animation-delay: -0.2s;
      ${'' /* animation-duration: 1s; */}
    }
  }
`;

export default Loader;
