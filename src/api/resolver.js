const {Time,JogadoresTime} = require('../models/Models')

module.exports = {
    Query: {
        async getTime(_, { id }) {
            return await Time.findByPk(id, { include: ["jogadores"]});
        },
        async getTimes() {
            return await Time.findAll({include: ["jogadores"]});
        }
    },
    Mutation: {
        async createTime (_, { input }) {
            const result = await Time.create({
                nome: input.nome,
                local: input.local,
                dataFundacao: input.dataFundacao,
                jogadores: input.jogadores
            }, {
                include: [ JogadoresTime ]
              })

            return result
        }
    }
}