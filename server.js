const path = require('node:path');

express = require('express');
app = express();
porta = 3000;

app.get('/', (req, res) => {
    path = path.join(__dirname, 'index.html');
    res.sendFile(path);
});

app.use((req, res) => {
    res.status(404).send('Página não encontrada meu chapa');
});

if(app.use() === 404){
    path = path.join(__dirname, '404.html');
    res.sendFile(path);
}

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});