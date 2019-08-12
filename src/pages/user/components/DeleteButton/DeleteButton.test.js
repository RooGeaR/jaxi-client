import React from 'react';
import { shallow, render } from 'enzyme';
import DeleteButton from './DeleteButton';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:8088/graphql"
});

describe('Delete button', () => {
  it('should render correctly', () => {
    const component = shallow(<DeleteButton userId={1} />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('Delete button', () => {
  it('should be render without error', () => {
    render(
      <ApolloProvider client={client}>
        <DeleteButton userId={1} />
      </ApolloProvider>
    );
    
  });
});
