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

const deleteCollection = function (id) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + id,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const updateCollection = function (data, id) {
  return $.ajax({
    // must access collection.id property of collectionData object -- rule from
    // getFormFields
    url: config.apiUrl + '/collections/' + id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: data
  })
}

module.exports = {
  createCollection: createCollection,
  indexCollections: indexCollections,
  deleteCollection: deleteCollection,
  updateCollection: updateCollection
}
