const express = require('express');
const router = express.Router();

// Rotas básicas para contatos
router.get('/', (req, res) => {
    res.json({ message: 'Lista de contatos' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Criar novo contato' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Detalhes do contato ${req.params.id}` });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Atualizar contato ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Deletar contato ${req.params.id}` });
});

module.exports = router;