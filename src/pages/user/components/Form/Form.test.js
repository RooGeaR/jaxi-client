import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

const onSubmit = jest.fn();

describe('Create user form', () => {
  it('should render correctly', () => {
    const component = shallow(<Form title='Create user' buttonText='Save' onSubmit={onSubmit} />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('Update user form', () => {
  it('should render correctly', () => {
    const component = shallow(<Form title='Update user' buttonText='Update' onSubmit={onSubmit} />);
  
    expect(component).toMatchSnapshot();
  });
});
