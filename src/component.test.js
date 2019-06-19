import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Component', () => {
  test('exists without data', () => {
    const wrapper = shallow(<Component />);

    expect(wrapper.exists()).toBe(true);
  });
  test('exists with data', () => {
    const wrapper = shallow(<Component text="React Component" />);
    expect(wrapper.exists()).toBe(true);
  });
});
