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

const updateMovie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.movie.id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: data
  })
}

const deleteMovie = function (data) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + data.movie.id,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createMovie: createMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
}
