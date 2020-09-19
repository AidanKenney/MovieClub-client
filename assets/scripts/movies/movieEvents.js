const getFormFields = require('./../../../lib/get-form-fields')
const movieApi = require('./movieApi')
const movieUi = require('./movieUi')
const collectionApi = require('./../collections/collectionApi')

const onCreateMovie = function (event) {
  event.preventDefault()

  const form = event.target

  const movieData = getFormFields(form)
  console.log(movieData)

  movieApi.createMovie(movieData)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onCreateMovieSuccess)
    .catch(movieUi.onCreateMovieFailure)
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const movieData = getFormFields(form)
  console.log(movieData)

  movieApi.updateMovie(movieData)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onUpdateMovieSuccess)
    .catch(movieUi.onUpdateMovieFailure)
}

const onDeleteMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const movieData = getFormFields(form)
  console.log(movieData)

  movieApi.deleteMovie(movieData)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onDeleteMovieSuccess)
    .catch(movieUi.onDeleteMovieFailure)
}

module.exports = {
  onCreateMovie: onCreateMovie,
  onUpdateMovie: onUpdateMovie,
  onDeleteMovie: onDeleteMovie
}
