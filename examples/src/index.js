import React from 'react';
import { render } from 'react-dom';
import ReactComponent from '../../src';
import './style.scss';
import '../../src/component.scss';

const App = () => <ReactComponent />;
render(<App />, document.getElementById('root'));
