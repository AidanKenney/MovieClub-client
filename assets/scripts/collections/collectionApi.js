'use strict'

const config = require('./../config')
const store = require('./../store')

const createCollection = function (data) {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: data
  })
}

module.exports = {
  createCollection: createCollection
}
