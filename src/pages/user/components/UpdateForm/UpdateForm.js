import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { updateUser } from '../../../../mutations';
import { userInfoQuery } from '../../../../queries';
import MutationForm from '../MutationForm';

const UpdateForm = ({ match: { params }, history }) => {

    return (
        <Query query={ userInfoQuery } variables={ {id: params.userId} }>
          {({ data, loading, error, fetchMore, refetch }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>

            return (
              <div className='row'>
                <div className={'col-md-5 col-md-offset-3'}>

                  <MutationForm 
                    action={ updateUser } 
                    isNewRecord={ false }
                    userId={ Number(params.userId) }
                    initialValues={ data.user }
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