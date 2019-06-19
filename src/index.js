import React from 'react';
import PropTypes from 'prop-types';
import './component.scss';

const ReactComponent = ({ text = 'React Component' }) => <div className="component">{text}</div>;

ReactComponent.propTypes = {
  text: PropTypes.string,
};
export default ReactComponent;
