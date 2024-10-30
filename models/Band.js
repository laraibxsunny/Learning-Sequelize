const { Model, DataTypes } = require('sequelize');
const { db } = require('../db.js');

class Band extends Model{};

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
}, {
    sequelize: db,
});


module.exports = {
    Band
};