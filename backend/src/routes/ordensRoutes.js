const express = require('express');
const router = express.Router();

// Rotas básicas para ordens
router.get('/', (req, res) => {
    res.json({ message: 'Lista de ordens' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Criar nova ordem' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Detalhes da ordem ${req.params.id}` });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Atualizar ordem ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Deletar ordem ${req.params.id}` });
});

module.exports = router;