const Banco = require('./BD Usuario');

const tabela = Banco.sequelize.define('Usuarios',{

    nome:{
        type: Banco.Sequelize.STRING
    },

    cpf:{
        type: Banco.Sequelize.STRING
    },

    email:{
        type: Banco.Sequelize.STRING
    },

    telefone:{
        type: Banco.Sequelize.BIGINT
    }
})

//tabela.sync({force: true});

module.exports = tabela;