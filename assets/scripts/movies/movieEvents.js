const getFormFields = require('./../../../lib/get-form-fields')
const movieApi = require('./movieApi')
const movieUi = require('./movieUi')

const onCreateMovie = function (event) {
  event.preventDefault()

  const form = event.target

  const movieData = getFormFields(form)
  console.log(movieData)

  movieApi.createMovie(movieData)
    .then(movieUi.onCreateMovieSuccess)
    .catch(movieUi.onCreateMovieFailure)
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const movieData = getFormFields(form)
  console.log(movieData)

  movieApi.updateMovie(movieData)
    .then(movieUi.onUpdateMovieSuccess)
    .catch(movieUi.onUpdateMovieFailure)
}

module.exports = {
  onCreateMovie: onCreateMovie,
  onUpdateMovie: onUpdateMovie
}
