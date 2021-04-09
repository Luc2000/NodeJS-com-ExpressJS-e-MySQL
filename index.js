// Responsabilidade de SUBIR O SERVIDOR.

const customExpress = require('./config/customExpress')

const app = customExpress();

app.listen(3002, () => console.log('Servidor rodando na porta 3002'));
