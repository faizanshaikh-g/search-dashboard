import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import SearchField from '../src/components/SearchField';
import MainPanel from '../src/components/MainPanel';
import ResultTable from '../src/components/ResultTable';

import { shallow, mount } from 'enzyme';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.matchesElement(<MainPanel />)).toEqual(true);
});

test('has text field', () => {
  const wrapper = shallow(<SearchField />);
  expect(wrapper.find('input')).toHaveLength (1);
});

test('takes search filter as input ', () => {
  const wrapper = shallow(<SearchField />);
  expect(wrapper.find('input')).toHaveLength (1);
  const searchInput = wrapper.find('input');
  searchInput.value = 'a';
  expect(searchInput.value).toBe('a');
});

// test('result changes on submit ', () => {
//   const resultWrapperOld = mount(<App />);
//   const oldResults = resultWrapperOld.find('.m-auto.lead');

//   expect(oldResults.html().indexOf('Sorry no records found')).toBeGreaterThanOrEqual(0);
//   const inputWrapper = resultWrapperOld.find('input');
//   expect(inputWrapper).toHaveLength (1);
//   inputWrapper.value = 'a';
//   expect(inputWrapper.value).toBe('a');

//   const mockCallBack = jest.fn();
//   const button = resultWrapperOld.find('button');
//   button.at(0).simulate('click', mockCallBack);

//   console.log(button.debug())

//   const newResults = resultWrapperOld.find('table');
//   expect(newResults).toHaveLength (1); 
// });