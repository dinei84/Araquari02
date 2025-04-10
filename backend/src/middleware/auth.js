const { auth } = require('../config/firebase');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split('Bearer ')[1];
        
        if (!token) {
            return res.status(401).json({ error: 'Token não fornecido' });
        }

        try {
            const decodedToken = await auth.verifyIdToken(token);
            req.user = decodedToken;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Token inválido' });
        }
    } catch (error) {
        console.error('Erro na autenticação:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

module.exports = authMiddleware;