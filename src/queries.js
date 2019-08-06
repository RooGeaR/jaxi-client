import { gql } from 'apollo-boost';

const userInfoQuery = gql`
    query getuser($id:ID!){
        user(id:$id){
            first_name
            last_name
            username
            email
            projects {
                id
                title
            }
        }
    }
`;

const userListQuery = gql`
    query getusers{
        users{
            id
            first_name
            last_name
            username
            email
        }
    }
`;

const projectInfoQuery = gql`
    query getproject($id:ID!){
        project(id:$id){
            title,
            user {
                id
                first_name
                last_name
            }
        }
    }
`;

const projectListQuery = gql`
    query getprojects{
        projects{
            id
            title
            user {
                id
                first_name
                last_name
            }
        }
    }
`;


export { userInfoQuery, userListQuery, projectInfoQuery, projectListQuery };