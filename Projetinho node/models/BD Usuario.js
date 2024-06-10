const Sequelize = require('sequelize')

const sequelize = new Sequelize('Users','root','davidale',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3307 //Usar esta porta por enquanto, para reservar a porta 3306 para o PHP
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}