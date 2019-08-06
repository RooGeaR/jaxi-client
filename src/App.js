import React from 'react';
import { StateProvider } from './hooks/state';
import { MutationForm, UpdateForm, List, Detail } from './pages/user/components';
import { 
	MutationForm as ProjectMutationForm, 
	UpdateForm as ProjectUpdateForm, 
	List as ProjectList, 
	Detail as ProjectDetail
} from './pages/project/components';
import { Panel } from './pages/panel/components';
import { MainLayout, NotFound } from './pages/common'
import { createUser, createProject } from './mutations';
import { Route, Switch } from 'react-router-dom';


const App = () => {
	
	const initialState = {
		callRefetch: false
	};
	  
	const reducer = (state, action) => {
		switch (action.type) {
		  case 'SET_CALL_REFETCH':
			return {
			  ...state,
			  callRefetch: action.callRefetch
			};
			
		  default:
			return state;
		}
	};

    return (
		<StateProvider initialState={initialState} reducer={reducer}>
		<div className="App">
			<Switch>
				<Route 
					exact 
					path='/'
					render={
						routeProps => (
							<Panel 
								{...routeProps}
								options={
									[
										{
											text: 'Users',
											icon: 'users',
											route: 'user'
										},
										{
											text: 'Projects',
											icon: 'folder-open',
											route: 'project'
										}
									]
								} 
							/>
						)
					} 
				/>

				<Route 
					exact 
					path='/user/create' 
					render={
						routeProps => (
							<MainLayout>
								<MutationForm {...routeProps} action={createUser} isNewRecord={true}/>
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/user/update/:userId' 
					render={
						routeProps => (
							<MainLayout>
								<UpdateForm { ...routeProps } />
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/user' 
					render={
						routeProps => (
							<MainLayout>
								<List { ...routeProps } />
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/user/:userId' 
					render={
						routeProps => (
							<MainLayout>
								<Detail { ...routeProps } />
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/project' 
					render={
						routeProps => (
							<MainLayout>
								<ProjectList { ...routeProps } />
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/project/create' 
					render={
						routeProps => (
							<MainLayout>
								<ProjectMutationForm {...routeProps} action={createProject} isNewRecord={true}/>
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/project/update/:projectId' 
					render={
						routeProps => (
							<MainLayout>
								<ProjectUpdateForm { ...routeProps } />
							</MainLayout>
						)
					} 
				/>

				<Route 
					exact 
					path='/project/:projectId' 
					render={
						routeProps => (
							<MainLayout>
								<ProjectDetail { ...routeProps } />
							</MainLayout>
						)
					} 
				/>

				<Route component={ NotFound } />
			</Switch>
		</div>
		</StateProvider>
    );
}

export default App;
