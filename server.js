express = require('express');
app = express();
porta = 3000;

app.get('/', (req, res) => {
    res.send('Servidor Rodando na porta ' + porta);
});

app.use((req, res) => {
    res.status(404).send('Página não encontrada meu chapa');
});


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});