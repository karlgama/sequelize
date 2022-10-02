/* eslint-disable no-unused-expressions */
const Sequelize = require('sequelize');
const database = require('../models/index');

const { Op } = Sequelize;

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    const { dataInicial, dataFinal } = req.query;
    const where = {};

    dataInicial || dataFinal ? where.data_inicio = {} : null;
    dataInicial ? where.data_inicio[Op.gte] = dataInicial : null;
    dataFinal ? where.data_inicio[Op.lte] = dataFinal : null;

    const todasAsTurmas = await database.Turmas.findAll({ where });
    return res.status(200).json(todasAsTurmas);
  }
}

module.exports = TurmaController;
