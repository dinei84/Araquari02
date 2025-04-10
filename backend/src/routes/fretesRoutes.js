const express = require('express');
const router = express.Router();

// Rotas básicas para fretes
router.get('/', (req, res) => {
    res.json({ message: 'Lista de fretes' });
});

router.post('/', (req, res) => {
    res.json({ message: 'Criar novo frete' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Detalhes do frete ${req.params.id}` });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Atualizar frete ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Deletar frete ${req.params.id}` });
});

module.exports = router;