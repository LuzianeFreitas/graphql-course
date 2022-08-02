const { ApolloServer } = require('apollo-server')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { typeDefs, resolvers } = require('./src/graphql')


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// create server
const server = new ApolloServer({schema})

// start server
// listen default port:4000
server.listen().then(({ url }) => console.log(url))