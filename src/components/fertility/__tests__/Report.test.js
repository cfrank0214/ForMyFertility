/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Report } from '../Report';
import { View, Spinner, Text } from 'native-base';

describe('>>>Report --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  
  beforeEach(()=>{
      wrapper = shallow(<Report />)
      
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <Report />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('+++ render the DUMB component', () => {
     expect(wrapper.length).toEqual(1)
  });
  it('contains 1 <View /> component', () => {
    expect(wrapper.find(View).length).toBe(1);
  });
  it('contains 1 <Spinner /> component', () => {
    expect(wrapper.find(Spinner).length).toBe(1);
  }); 
  it('contains 1 <Text /> component', () => {
    expect(wrapper.find(Text).length).toBe(1);
  }); 
});