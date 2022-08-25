const database = require("../models/index.js");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(err.message);
    }
  }

  static async pegaMatricula(req, res) {
    const { pessoaId, matriculaId } = req.params;
    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(pessoaId),
        },
      });
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(err.message);
    }
  }

  static async criaMatricula(req, res) {
    const { id } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(id) };
    try {
      const matricula = await database.Matriculas.create(novaMatricula);
      return res.status(201).json(matricula);
    } catch (error) {
      return res.status(500).json(err.message);
    }
  }

  static async criaPessoa(req, res) {
    const pessoa = req.body;
    try {
      const novaPessoaCriada = await database.Pessoas.create(pessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const pessoa = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(pessoa, {
        where: { id: Number(id) },
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
