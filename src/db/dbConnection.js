const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://wallacem:teste123@cluster0.tzenxig.mongodb.net/Blog?retryWrites=true&w=majority`;

async function connectDb(){
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });
}

module.exports = connectDb;
