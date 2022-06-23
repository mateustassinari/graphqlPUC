const resolvers = require ('./resolver')
const { makeExecutableSchema } = require('graphql-tools')

const TimeAttribs = `
    id: ID
    nome: String!
    local: String!
    dataFundacao: String!
`
const JogadorAttribs = `
    id: ID
    nome: String!
    pais: String!
    dataNascimento: String!
`

const typeDefs = `
    type Time {
        ${TimeAttribs}
        jogadores: [Jogador]
    }
    type Jogador {
        ${JogadorAttribs}
    }
    type Query {
        getTime(id: ID!): Time
        getTimes: [Time]
    }
    input TimeInput {
        ${TimeAttribs}
        jogadores: [JogadorInput]
    }

    input JogadorInput {
        ${JogadorAttribs}
    }

    type Mutation {
        createTime(input: TimeInput): Time
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs,
    resolvers
})