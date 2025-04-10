const { auth } = require('../config/firebase');

const authController = {
  async login(req, res) {
    try {
      const { idToken } = req.body;
      
      if (!idToken) {
        return res.status(400).json({ error: 'Token não fornecido' });
      }

      const decodedToken = await auth.verifyIdToken(idToken);
      return res.json({ user: decodedToken });
    } catch (error) {
      return res.status(401).json({ error: 'Falha na autenticação' });
    }
  },

  async verifyToken(req, res) {
    try {
      const token = req.headers.authorization?.split('Bearer ')[1];
      
      if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
      }

      const decodedToken = await auth.verifyIdToken(token);
      return res.json({ valid: true, user: decodedToken });
    } catch (error) {
      return res.status(401).json({ valid: false, error: 'Token inválido' });
    }
  }
};

module.exports = authController;