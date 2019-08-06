import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './Styles';

const Panel = ({ options }) => {
console.log('options', options);
        return (
            <div className='container'>
                <Styles className="row">
                    {
                        options.map((option, i) => {
                            return (
                                <div className="col-md-3" key={i}>
                                    <div className="square-panel-block">
                                        <Link to={ option.route }>
                                            <div className="icon"><i className={`fa fa-${option.icon}`} aria-hidden="true"></i></div>
                                            <h2 className="title">{ option.text }</h2>  
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Styles>
            </div>
        );
}

Panel.propTypes = {
    /**  Options */
    options: PropTypes.array
}

export default Panel;