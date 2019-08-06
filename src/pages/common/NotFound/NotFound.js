import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    font-size: 23px;
    font-style: italic;
    margin-top: 50px;
    color: white;
`;

const NotFound = () => {
    return (
        <Page className="row">
            <div className={`col-md-4 col-md-offset-4`}>
                Sorry, page not found
            </div>
        </Page>
    );
}

export default NotFound;