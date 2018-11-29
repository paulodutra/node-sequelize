module.exports = (app) => {
    //definição de endpoint
    app.use('/contacts', require('./routes/contacts/index'));
}