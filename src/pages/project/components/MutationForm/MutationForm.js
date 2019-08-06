import React from "react";
import PropTypes from 'prop-types';
import { useGlobalState } from '../../../../hooks/state';
import { Mutation } from 'react-apollo';
import Form from "../Form";
import moment from 'moment';

const MutationForm = ({ action, isNewRecord, projectId, initialValues, history }) => {

  const [ state, dispatch ] = useGlobalState();

  return (
    <Mutation mutation={action}>
      {(action, { data, loading, error }) => {

        const onSubmit = values => {
            let project = {};

            if (isNewRecord) {
                project = {
                    title: values.title,
                    user_id: values.user_id,
                    created_at: moment().format("YYYY-MM-DD H:mm:ss")
                };
            } else {
                project = {
                    id: projectId,
                    title: values.title,
                    user_id: values.user_id,
                };
            }

            action({
                variables: {
                  project: project
                }
            }).then(res => {
                if (isNewRecord) {
                  dispatch({
                    type: 'SET_CALL_REFETCH',
                    callRefetch: true
                  });
                }
                return history.push('/project');
            });
        };

        return (
          <div>
            <div className={'text-right'}>
              <Form
                title={ isNewRecord ? 'Create project' : 'Update project' }
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

    /** Project id */
    projectId: PropTypes.number,

    /** Router history */
    history: PropTypes.object
}

export default MutationForm;