const express = require('express')
const {create} = require('express-handlebars')
const bodyParser = require('body-parser')
const tabela = require('./models/TB Usuario');


const app = express();

//handlebars config
const handlebars = create({

    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars')
//handlebars config


//bodyparser config
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
//bodyparser config


//Portas

app.get('/menu',(req,res)=>{

    res.render('Menu.handlebars')
})

app.get('/ListaTabela',(req,res)=>{

    tabela.findAll().then((users) =>{
        
        res.render('Lista de usuarios',{user: users})
    })
})

app.get('/usuario',(req,res) =>{

    res.render("cadastro");
}) 

app.post('/table',(req,res) => {

    tabela.create({

        nome: req.body.User_name,
        cpf: req.body.User_cpf,
        email: req.body.User_email,
        telefone: req.body.User_telephone

    }).then(() =>{
        res.redirect('/menu')
    }).catch((erro) =>{
        res.send("Erro ao cadastrar este usuário!!" + erro)
    })
})

app.get('/deletar/:id',(req,res)=>{

    tabela.destroy({
        where:{
            id: req.params.id
        }
    }).then(() =>{
        res.redirect('/ListaTabela')
    }).catch((erro) =>{
        res.send("Erro ao deletar usuários!!",erro)
    })
})

app.listen(7630,()=>{
    console.log("Servidor rodando")
})

//localhost:7630/menu