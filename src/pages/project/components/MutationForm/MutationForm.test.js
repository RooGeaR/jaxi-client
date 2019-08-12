import React from 'react';
import { shallow, mount } from 'enzyme';
import MutationForm from './MutationForm';
import { StateProvider } from '../../../../hooks/state';
import { initialState, reducer } from '../../../../App';
import { createProject, updateProject } from '../../../../mutations';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: "http://localhost:8088/graphql"
});

describe('Mutation create form', () => {
  it('should render correctly', () => {
    const component = shallow(
      <StateProvider initialState={initialState} reducer={reducer}>
        <MutationForm action={createProject} isNewRecord={true} />
      </StateProvider>
    );
  
    expect(component).toMatchSnapshot();
  });
});

describe('Mutation create form', () => {
  it('submitting form', () => {
    const component = mount(
      <ApolloProvider client={client}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <MutationForm action={createProject} isNewRecord={true}/>
        </StateProvider>
      </ApolloProvider>
    );

    component
      .find('button#submit-button')
      .simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});

describe('Mutation update form', () => {
  it('should render correctly', () => {
    const component = shallow(
      <StateProvider initialState={initialState} reducer={reducer}>
        <MutationForm action={updateProject} isNewRecord={false} projectId={1} />
      </StateProvider>
    );
  
    expect(component).toMatchSnapshot();
  });
});