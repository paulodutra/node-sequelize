//pacote
const Sequelize = require('sequelize');

//instancia do pacote
const sequelize = new Sequelize('mysql://root:root@localhost:3306/live_sequelize');

sequelize
    .authenticate()
    .then(() => console.log('Authenticated'))
    .catch(() => console.log('Error auth'));

sequelize.sync();

module.exports = sequelize;