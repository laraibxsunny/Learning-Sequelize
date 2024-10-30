const { Model, DataTypes } = require('sequelize');
const { db } = require('../db');

class Musician extends Model{};

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
}, {
    sequelize: db
});


module.exports = {
    Musician
};