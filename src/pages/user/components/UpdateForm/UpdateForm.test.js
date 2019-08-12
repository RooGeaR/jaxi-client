import React from 'react';
import { shallow, render } from 'enzyme';
import UpdateForm from './UpdateForm';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:8088/graphql"
});

const routerMatch = {
  params: {
    userId: '1'
  }
};

describe('Update form', () => {
  it('should render correctly', () => {
    const component = shallow(<UpdateForm match={routerMatch} />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('Update form', () => {
  it('should be render without error', () => {
    render(
      <ApolloProvider client={client}>
        <UpdateForm match={routerMatch} />
      </ApolloProvider>
    );
    
  });
});
