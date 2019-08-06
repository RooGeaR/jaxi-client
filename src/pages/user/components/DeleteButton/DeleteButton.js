import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { deleteUser } from '../../../../mutations';

import styled from 'styled-components'

const Button = styled.button`
    color: #337ab7;
`;

const DeleteButton = ({ userId, refetch }) => {

        return (
            <Mutation mutation={deleteUser}>
                {(deleteUser, { data, loading, error }) => {
                    return (
                        <>
                            <Button
                                className="left"
                                onClick={() => {
                                    deleteUser({
                                        variables:{ id: userId }
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
    /** User id */
    userId: PropTypes.number
}

export default DeleteButton;