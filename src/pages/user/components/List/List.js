import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { userListQuery } from '../../../../queries';
import DeleteButton from '../DeleteButton';
import styled from 'styled-components';

const Table = styled.table`
    background-color: #6699FF;

    th {
      color: white;
    }

    td {
      color: #3366CC;
    }
`;

const List = () => {

    return (
        <Query query={ userListQuery } >
          {({ data, loading, error, fetchMore, refetch }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>
            console.log('datalist',data);
            return (
              <>
              <div className='row'>
                <div className='col-md-12'>
                <h2>User list</h2>
                  <button type='button' className='btn btn-default pull-right'>
                    <Link to={`/user/create`}>
                      <span className='fa fa-plus'></span> Create
                    </Link>
                  </button>
                </div>  
              </div>

              <div className='row'>
                <div className={'col-md-12'}>

                  <Table className='table'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.users.map((user, i) => {
                          return (
                            <tr key={i}>
                              <td>{ i+1 }</td>
                              <td>{ user.first_name }</td>
                              <td>{ user.last_name }</td>
                              <td>{ user.email }</td>
                              <td>{ user.username }</td>
                              <td>
                                <button>
                                  <Link to={`/user/${user.id}`}>
                                      <span className='fa fa-eye'></span>
                                  </Link>
                                </button>
                                <button>
                                  <Link to={`/user/update/${user.id}`}>
                                      <span className='fa fa-pencil'></span>
                                  </Link>
                                </button>
                                <DeleteButton 
                                  userId={Number(user.id)} 
                                  refetch={refetch} 
                                />
                              </td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </div>
              </div>
              </>
            );
          }}
        </Query>
    );
}

export default List;