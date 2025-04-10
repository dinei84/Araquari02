const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const authMiddleware = require('./middleware/auth');
const corsOptions = require('./config/cors');

const app = express();

// Configuração do CORS
app.use(cors(corsOptions));

// Parse de JSON no body das requisições
app.use(express.json());

// Headers de segurança básicos
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Rotas públicas
app.use('/api/auth', routes.authRoutes);

// Middleware de autenticação para rotas protegidas
app.use('/api', authMiddleware);

// Rotas protegidas
app.use('/api/fretes', routes.fretesRoutes);
app.use('/api/contatos', routes.contatosRoutes);
app.use('/api/ordens', routes.ordensRoutes);

// Rota básica para teste
app.get('/', (req, res) => {
    res.json({ message: 'API está funcionando!' });
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});