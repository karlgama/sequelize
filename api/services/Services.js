const database = require('../models');

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return database[this.nomeDoModelo].findAll();
  }

  async pegaUmRegistro(id) {

  }

  async criaRegistro(dados) {}

  async atualizaRegistro(dadosAtualizados, id, transaction = {}) {
    return this.database[this.nomeDoModelo]
      .update(dadosAtualizados, { where: { id } }, transaction);
  }

  async atualizaRegistros(dadosAtualizados, where, transaction = {}) {
    return this.database[this.nomeDoModelo]
      .update(dadosAtualizados, { where: { ...where } }, transaction);
  }

  async apagaRegistro(id) {}
}

module.exports = Services;
