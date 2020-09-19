'use strict'

const config = require('./../config')
const store = require('./../store')

const createMovie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: data
  })
}

module.exports = {
  createMovie: createMovie
}
