const { Model, DataTypes } = require('sequelize');
const { db } = require('../db');

class Song extends Model{};

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
}, {
    sequelize: db
});


module.exports = {
    Song
};