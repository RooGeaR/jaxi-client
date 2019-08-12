import React from 'react';
import { shallow, render } from 'enzyme';
import List from './List';
import { StateProvider } from '../../../../hooks/state';
import { initialState, reducer } from '../../../../App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:8088/graphql"
});

describe('List user', () => {
  it('should render correctly', () => {
    const component = shallow(
      <StateProvider initialState={initialState} reducer={reducer}>
        <List />
      </StateProvider>
    );
  
    expect(component).toMatchSnapshot();
  });
});

describe('List user', () => {
  it('should be render without error', () => {
    render(
      <ApolloProvider client={client}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <List />
        </StateProvider>
      </ApolloProvider>
    );
    
  });
});
