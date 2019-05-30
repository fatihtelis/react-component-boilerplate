import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LoremIpsum = ({ text = 'Lorem Ipsum' }) => <div>{text}</div>;

LoremIpsum.propTypes = {
  text: PropTypes.string,
};
export default LoremIpsum;
