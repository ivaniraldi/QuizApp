const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sofka', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    password: 'iraldi11',
});

module.exports=sequelize;