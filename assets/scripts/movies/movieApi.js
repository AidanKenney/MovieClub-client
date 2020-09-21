'use strict'

const config = require('./../config')
const store = require('./../store')

const createMovie = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: {
      movie: {
        title: data.movie.title,
        releaseDate: data.movie.releaseDate,
        description: data.movie.description,
        collectionId: id
      }
    }
  })
}

const updateMovie = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: data
  })
}

const deleteMovie = function (id) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + id,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createMovie: createMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
}
