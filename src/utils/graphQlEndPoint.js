import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";



export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://pacific-dawn-94575.herokuapp.com/graphql',
    // uri: 'http://localhost:5000/graphql'
})