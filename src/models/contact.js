const sequelize = require('./index');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('contacts', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        //object de opção, relacionamentos e etc, definição de timestamps
       /*classMethods: {
           associate: () => {

           }
       }*/
    });
}