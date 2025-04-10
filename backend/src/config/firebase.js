const admin = require('firebase-admin');
const path = require('path');
require('dotenv').config();

let serviceAccount;

try {
    // Carrega as credenciais do arquivo JSON
    serviceAccount = require(path.join(__dirname, '../../firebase-service-account.json'));
    
    // Inicializa o Firebase Admin
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log('Firebase Admin inicializado com sucesso!');
} catch (error) {
    console.error('Erro ao carregar as credenciais do Firebase:', error);
    console.log('Por favor, verifique se o arquivo firebase-service-account.json está presente na pasta raiz do backend');
    process.exit(1);
}

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };