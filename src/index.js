const express = require('express');

const request = require('request-promise-native')


const app = express()
//funções do express
app.set('view engine', 'ejs'); //para acessar o template ejs
app.set('views', './src/views'); //para acessar a pasta views
app.use(express.static('public'))//para acessar a pasta public com os assets

// função assíncrona que pega a requisição da api usando os modulos request e request-promise-native(ver documentação)
app.get('/produtos', async function(req, res){
 const result =  await  request.get('http://localhost:3000/api/v1/products');
 // debug: console.log(JSON.parse(result));
//passando os dados para a página html
const products = JSON.parse(result).data;

    res.render("products", {products});
})



app.listen(3001, function() {
    console.log('Servidor inicializado na porta 3001');
})