import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import panel from '../panel';


class Container extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/" />
                </Switch>
            </div>
        );
    }
}

export default connect(null, null)(Container);