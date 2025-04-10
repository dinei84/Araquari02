require('dotenv').config();

const corsOptions = {
    origin: function (origin, callback) {
        // Converte a string de origens em um array
        const allowedOrigins = process.env.CORS_ORIGINS.split(',');
        
        // Permite requisições sem origem (como apps mobile ou postman)
        if (!origin) {
            return callback(null, true);
        }
        
        // Verifica se a origem está na lista de permitidos
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Bloqueado pelo CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    maxAge: 86400 // 24 horas
};

module.exports = corsOptions;