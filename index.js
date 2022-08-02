const { gql, ApolloServer } = require("apollo-server")

const db = [
    {
        id: 1,
        nome: 'Luziane F',
        email: 'luziane@gmail.com',
        telefone: '035 9982 1234',
        perfil: 1
    },
    {
        id: 2,
        nome: 'LuziN F',
        email: 'luziN@gmail.com',
        telefone: '035 9982 1234',
        perfil: 2
    }
]

const perfis = [
    { id: 1, descricao: 'ADMIN'},
    { id: 2, descricao: 'NORMAL'}
]

const typeDefs = gql`
    enum TipoPerfil {
        ADMIN
        NORMAL
    }

    type Usuario {
        id: Int
        nome: String
        email: String
        telefone: String
        perfil: Perfil
    }

    type Perfil {
        id: Int
        descricao: TipoPerfil
    }

    type Query {
        usuario(id: Int): Usuario
        perfis: [Perfil]
        usuarios: [Usuario]
    }
`

const resolvers = {
    Usuario: {
        perfil(usuario) {
            return perfis.find((p) => p.id === usuario.perfil)
        }
    },
    Query: {
        usuario(obj, args) {
            return db.find((d) => d.id === args.id)
        },
        usuarios() {
            return db
        },
        perfis() {
            return perfis
        }
    }
}

// create server
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// start server
// listen default port:4000
server.listen().then(({ url }) => console.log(url))