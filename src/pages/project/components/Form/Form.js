import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import { userListQuery } from '../../../../queries';
import Styles from './Styles';

const ProjectForm = ({ title, buttonText, onSubmit, initialValues }) => (
	<Styles>
    <h1>{ title }</h1>
    <Form
      onSubmit={ onSubmit }
      initialValues={ initialValues }
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={ handleSubmit }>
          <div>
            <label>Title</label>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label>Responsible</label>
            <Field name="user_id" component="select" required>
              <Query query={ userListQuery } >
                {({ data, loading, error, fetchMore, refetch }) => {

                  if (loading) return <option> loading... </option>
                  if (error) return <option> { error.message } </option>
                  
                  return (
                    <>
                      {
                        data.users.map((user, i) => (
                          <option value={user.id} key={ i + 1 }>{ user.first_name } { user.last_name }</option>
                        ))
                      }
                    </>
                  );
                }}
              </Query>
            </Field>
          </div>
          <div className="buttons">
            <button type="submit" disabled={ submitting || pristine }>
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
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);

ProjectForm.propTypes = {
	/** Form title */
	title: PropTypes.string,

	/** Button submit text */
  buttonText: PropTypes.string,
  
  /** Function submit form */
  onSubmit: PropTypes.func,
  
  /** Initial values */
	initialValues: PropTypes.object,
};

export default ProjectForm;
