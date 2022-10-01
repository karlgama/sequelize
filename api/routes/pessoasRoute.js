const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAtivas);
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:pessoaId/matriculas/:matriculaId', PessoaController.pegaMatricula);
router.post('/pessoas', PessoaController.criaPessoa);
router.post('/pessoas/:id/matriculas', PessoaController.criaMatricula);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);
router.delete('/pessoas/:id', PessoaController.deletar);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);

module.exports = router;
