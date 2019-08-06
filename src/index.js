import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './main.css';

const token = 'your-personal-access-token';

const client = new ApolloClient({
    uri: "http://localhost:8088/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }
});

    client
    .query({
        query: gql` 
        {
            user(id:1){
                first_name
                last_name
            }
        }
        `
    })
    .then(res => console.log(res));

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
