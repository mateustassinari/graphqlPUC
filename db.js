const Sequelize = require('sequelize')
const sequelize = new Sequelize('graphql','SEU_LOGIN','SUA_SENHA', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;