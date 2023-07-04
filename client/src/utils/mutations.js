import { gql } from '@apollo/client';

// possibly change mutation name from login to loginUser
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: NewBook!) {
        saveBook(bookData: $bookData) {
            _id
            bookCount
            savedBooks {
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            bookCount
            savedBooks {
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
`;