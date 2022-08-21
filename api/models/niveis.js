'use strict';
const {
  Model
} = require('sequelize');
const pessoas = require('./pessoas');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    static associate(models) {
      Niveis.hasMany(models.Turmas,{
        foreignKey:"niveil_id"
      })
    }
  }
  Niveis.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
  });
  return Niveis;
};