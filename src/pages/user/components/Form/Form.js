import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Styles from './Styles';

const UserForm = ({ title, buttonText, onSubmit, initialValues }) => (
	<Styles>
    <h1>{ title }</h1>
    <Form
      onSubmit={ onSubmit }
      initialValues={ initialValues }
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={ handleSubmit }>
          <div>
            <label>First Name</label>
            <Field
              name="first_name"
              component="input"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="last_name"
              component="input"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label>Username</label>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={ submitting || pristine } id='submit-button'>
              { buttonText }
            </button>
            <button
              type="button"
              onClick={ form.reset }
              disabled={ submitting || pristine }
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
);

UserForm.propTypes = {
	/** Form title */
	title: PropTypes.string,

	/** Button submit text */
  buttonText: PropTypes.string,
  
  /** Function submit form */
  onSubmit: PropTypes.func,
  
  /** Initial values */
	initialValues: PropTypes.object,
};

export default UserForm;
