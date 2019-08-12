import React from 'react';
import { shallow, render } from 'enzyme';
import Detail from './Detail';
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

describe('Detail view user', () => {
  it('should render correctly', () => {
    const component = shallow(<Detail match={routerMatch} />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('Detail view user', () => {
  it('should be render without error', () => {
    render(
      <ApolloProvider client={client}>
        <Detail match={routerMatch} />
      </ApolloProvider>
    );
    
  });
});
