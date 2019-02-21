import React from 'react';
import LoaderComponent from 'react-loaders';
import 'loaders.css/src/animations/ball-pulse.scss';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const Loader = () => {
  return (
    <div>
      <img src={logo} alt="Suzie's Scores Logo" />
      <LoaderComponent type="ball-pulse" color="#B5E8D5" />
    </div>
  );
};

export default Loader;
