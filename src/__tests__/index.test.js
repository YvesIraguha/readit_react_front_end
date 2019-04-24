import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HelloWorld } from '../pages/index';
configure({ adapter: new Adapter() });
test('should return true', () => {
  expect(true).toBe(true);
});

test('should match the snapshot', () => {
  const wrapper = shallow(<HelloWorld />);
  expect(wrapper).toMatchSnapshot();
});
