import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { deleteProject } from '../../../../mutations';
import styled from 'styled-components'

const Button = styled.button`
    color: #337ab7;
`;

const DeleteButton = ({ projectId, refetch }) => {

        return (
            <Mutation mutation={deleteProject}>
                {(deleteProject, { data, loading, error }) => {
                    return (
                        <>
                            <Button
                                className="left"
                                onClick={() => {
                                    deleteProject({
                                        variables:{ id: projectId }
                                    }).then(res => {
                                        refetch();
                                    })
                                }}
                            >
                                <span className='fa fa-trash'></span>
                            </Button>
                            {loading && <p>processing...</p>}
                            {error && <p>{error.message}</p>}
                        </>
                    );
                }}
            </Mutation>
        );
}

DeleteButton.propTypes = {
    /** Project id */
    projectId: PropTypes.number
}

export default DeleteButton;