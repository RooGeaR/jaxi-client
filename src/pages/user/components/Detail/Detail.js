import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { userInfoQuery } from '../../../../queries';
import styled from 'styled-components';

const Info = styled.div`
  margin-top: 20px;
  
  .profile-user-info {
    display: table;
    width: 98%;
    width: calc(100% - 24px);
    margin: 0 auto
  }

  .profile-info-row {
    display: table-row
  }

  .profile-info-name,
  .profile-info-value {
    display: table-cell;
    border-top: 1px dotted #D5E4F1
  }

  .profile-info-name {
    text-align: right;
    padding: 6px 10px 6px 4px;
    font-weight: 400;
    color: #667E99;
    background-color: transparent;
    width: 110px;
    vertical-align: middle
  }

  .profile-info-value {
    padding: 6px 4px 6px 6px
  }

  .profile-info-value>span+span:before {
    display: inline;
    content: ",";
    margin-left: 1px;
    margin-right: 3px;
    color: #666;
    border-bottom: 1px solid #FFF
  }

  .profile-info-row:first-child .profile-info-name,
  .profile-info-row:first-child .profile-info-value {
      border-top: none
  }

  .blue {
    color: #478FCA!important
  }
`;

const Detail = ({ match: { params }, history }) => {

    return (
        <Query query={ userInfoQuery } variables={ {id: params.userId} }>
          {({ data, loading, error, fetchMore, refetch }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>

            const { first_name, last_name, email, username } = data.user;

            return (
              <div className='row'>
                <div className={'col-md-12'}>
                  <Info className='jumbotron'>
                    <h4 className="blue">
								      <span>{ first_name } { last_name }</span>
                    </h4>
                    <div className="profile-user-info">
                      <div className="profile-info-row">
                        <div className="profile-info-name">Username</div>

                        <div className="profile-info-value">
                          <span>{ username }</span>
                        </div>
                      </div>
                    </div>

                    <div className="profile-user-info">
                      <div className="profile-info-row">
                        <div className="profile-info-name">Email</div>

                        <div className="profile-info-value">
                          <span>{ email }</span>
                        </div>
                      </div>
                    </div>
                  </Info>
                </div>
              </div>
            );
          }}
        </Query>
    );
}

Detail.propTypes = {
  /** Router params */
  match: PropTypes.object,

  /** Router history */
  history: PropTypes.object
}

export default Detail;