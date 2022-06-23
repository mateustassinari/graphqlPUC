const db = require ('../../db');
const DataTypes = require('sequelize/lib/data-types');

const Time = db.define('time', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      local: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataFundacao: {
        type: DataTypes.DATE,
        allowNull: false,
      }
  },{timestamps: false});

const Jogador = db.define('jogador', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Times',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
  },{timestamps: false,tableName: 'jogadores'});

const JogadoresTime = Time.hasMany(Jogador,{as:'jogadores'});

const TimeJogador = Jogador.belongsTo(Time, { as: 'time'});

module.exports = { Jogador, Time, JogadoresTime, TimeJogador }
