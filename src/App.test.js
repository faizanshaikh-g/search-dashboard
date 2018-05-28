import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPanel from './components/MainPanel';
import { shallow, mount } from 'enzyme';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.matchesElement(<MainPanel />)).toEqual(true);
});