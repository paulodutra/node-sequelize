const sequelize = require('./../../models/index');
const Contact = sequelize.import('./../../models/contact');

module.exports = (req, res) => {
   Contact
    //.findAll()
    .findAndCountAll()
    .then((data) => res.json({ data }));
}