import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../img/logo.svg';
import { colors, flexCenter } from 'Utilities';

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
    opacity: .6;
  }

  33% {
    transform: scale(1);
    opacity: 1;
  }
  94% {
    transform: scale(1);
  }

  100% {
    transform: scale(.3);
    opacity: .6;
  }
`;
const grow2 = keyframes`
  0% {
    transform: scale(.3);
    opacity: .6;
  }

  66% {
    transform: scale(1);
    opacity: 1;
  }

  96% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(.3);
    opacity: .75;
  }
`;
const grow3 = keyframes`
  0% {
    transform: scale(.3);
    opacity: .6;
  }

  90% {
    transform: scale(1);
    opacity: 1;
  }

  98% {
    transform: scale(1);
  }
  100% {
    transform: scale(.3);
    opacity: .75;
  }
`;

const StyledLoader = styled.div`
  ${flexCenter()};
  flex-direction: column;
  min-height: calc(100vh - 157px);
  .loading-balls-container {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    width: 100px;
    .loader-ball {
      transform: scale(0);
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      background-color: ${colors.black};
    }
    .one {
      animation: ${grow} 0.75s 0s ease-in infinite;
    }
    .two {
      animation: ${grow2} 0.75s 0s ease-in infinite;
    }
    .three {
      animation: ${grow3} 0.75s 0s ease-in infinite;
    }
  }
`;

export default Loader;
