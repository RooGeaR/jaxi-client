import { gql } from 'apollo-boost';

const createUser = gql`
    mutation CreateUser($user: userInput!) {
        createUser(user: $user) {
            id
            first_name
            last_name
            username
            email
            password
        }
    }
`;

const updateUser = gql`
    mutation UpdateUser($user: userInputUpdate!) {
        updateUser(user: $user) {
            id
            first_name
            last_name
            username
            email
            password
        }
    }
`;

const deleteUser = gql`
    mutation DeleteUser($id: Int!) {
        deleteUser(id: $id) {
            id
            first_name
            last_name
            username
        }
    }
`;

const createProject = gql`
    mutation CreateProject($project: projectInput!) {
        createProject(project: $project) {
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

const updateProject = gql`
    mutation UpdateProject($project: projectInputUpdate!) {
        updateProject(project: $project) {
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

const deleteProject = gql`
    mutation DeleteProject($id: Int!) {
        deleteProject(id: $id) {
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


export { createUser, deleteUser, updateUser, createProject, deleteProject, updateProject };