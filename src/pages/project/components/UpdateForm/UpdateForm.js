import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { updateProject } from '../../../../mutations';
import { projectInfoQuery } from '../../../../queries';
import MutationForm from '../MutationForm';

const UpdateForm = ({ match: { params }, history }) => {

    return (
        <Query query={ projectInfoQuery } variables={ {id: params.projectId} }>
          {({ data, loading, error, fetchMore, refetch }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>

            const projectValues = {
              title: data.project.title,
              user_id: data.project.user.id
            };

            return (
              <div className='row'>
                <div className={'col-md-5 col-md-offset-3'}>

                  <MutationForm 
                    action={ updateProject } 
                    isNewRecord={ false }
                    projectId={ Number(params.projectId) }
                    initialValues={ projectValues }
                    history={ history }
                  />
                </div>
              </div>

            );
          }}
        </Query>
    );
}

UpdateForm.propTypes = {
    /** Router params */
    match: PropTypes.object,

    /** Router history */
    history: PropTypes.object
}

export default UpdateForm;