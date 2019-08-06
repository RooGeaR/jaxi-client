import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    color: #337ab7;
    margin-top: 10px;
`;
const BackButton = (props) => {
    return (
        <Button 
            onClick={ () => props.history.goBack() }
            className='btn btn-default'
        >
            <span className='fa fa-arrow-left'></span> Go Back
        </Button>
    );
}


export default withRouter(BackButton);