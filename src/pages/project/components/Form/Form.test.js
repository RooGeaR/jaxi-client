import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

const onSubmit = jest.fn();

describe('Create project form', () => {
  it('should render correctly', () => {
    const component = shallow(<Form title='Create project' buttonText='Save' onSubmit={onSubmit} />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('Update project form', () => {
  it('should render correctly', () => {
    const component = shallow(<Form title='Update project' buttonText='Update' onSubmit={onSubmit} />);
  
    expect(component).toMatchSnapshot();
  });
});
