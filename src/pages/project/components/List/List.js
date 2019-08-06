import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { projectListQuery } from '../../../../queries';
import DeleteButton from '../DeleteButton';
import { useGlobalState } from '../../../../hooks/state';
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

    const [ state, dispatch ] = useGlobalState();

    return (
        <Query query={ projectListQuery } >
          {({ data, loading, error, fetchMore, refetch }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>
            
            if (state.callRefetch) {
              refetch();
              dispatch({
                  type: 'SET_CALL_REFETCH',
                  callRefetch: false
              });
            }
            
            return (
              <>
              <div className='row'>
                <div className='col-md-12'>
                <h2>Project list</h2>
                  <button type='button' className='btn btn-default pull-right'>
                    <Link to={`/project/create`}>
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
                        <th>Title</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.projects.map((project, i) => {
                          return (
                            <tr key={i}>
                              <td>{ i+1 }</td>
                              <td>{ project.title }</td>
                              <td>
                                <button>
                                  <Link to={`/project/${project.id}`}>
                                      <span className='fa fa-eye'></span>
                                  </Link>
                                </button>
                                <button>
                                  <Link to={`/project/update/${project.id}`}>
                                      <span className='fa fa-pencil'></span>
                                  </Link>
                                </button>
                                <DeleteButton 
                                  projectId={Number(project.id)} 
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