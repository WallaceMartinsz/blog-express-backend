const app = require('../src/app.js')

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log('Aplicação iniciou em http://localhost:3030'));