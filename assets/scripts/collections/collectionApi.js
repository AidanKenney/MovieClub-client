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

const indexCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createCollection: createCollection,
  indexCollections: indexCollections
}
