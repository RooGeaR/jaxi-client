import React from "react";
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Form from "../Form";
import moment from 'moment';

const MutationForm = ({ action, isNewRecord, userId, initialValues, history }) => {

  return (
    <Mutation mutation={action}>
      {(action, { data, loading, error }) => {

        const onSubmit = values => {
            let user = {};

            if (isNewRecord) {
                user = {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    created_at: moment().format("YYYY-MM-DD H:mm:ss")
                };
            } else {
                user = {
                    id: userId,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    username: values.username,
                    password: values.password
                };
            }

            action({
                variables: {
                  user: user
                }
            }).then(res => {
                return history.push(`/user`)
            });
        };

        return (
          <div>
            <div className={'text-right'}>
              <Form
                title={ isNewRecord ? 'Create user' : 'Update user' }
                buttonText={ isNewRecord ? 'Save' : 'Update' }
                onSubmit={ onSubmit }
                initialValues={ initialValues }
              />
            </div>
            {loading && <p>processing...</p>}
            {error && <p>{error.message}</p>}
          </div>
        );
      }}
    </Mutation>
  );
};

MutationForm.propTypes = {
    /** Actiont to execute, update or create */
    action : PropTypes.object,

    /** New record or not */
    isNewRecord : PropTypes.bool,

    /** Initial values for the form */
    initialValues: PropTypes.object,

    /** User id */
    userId: PropTypes.number,

    /** Router history */
    history: PropTypes.object
}

export default MutationForm;