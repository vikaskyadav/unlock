const Sequelize = require('sequelize')
const models = require('./models')

models.Lock.removeAttribute('id');

module.exports = models.Lock