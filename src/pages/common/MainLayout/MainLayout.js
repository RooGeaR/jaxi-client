import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton';


const MainLayout = ({ children }) => {
    return (
        <div className='row'>
            <div className='container'>
                <BackButton />
                {children}
            </div>
        </div>
    );
}

MainLayout.propTypes = {
    children : PropTypes.element
}

export default MainLayout;