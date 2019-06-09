import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import './style.scss';

const LoremIpsum = ({ text = 'Lorem Ipsum' }) => <div className="test">{text}</div>;

LoremIpsum.propTypes = {
  text: PropTypes.string,
};
export default LoremIpsum;
