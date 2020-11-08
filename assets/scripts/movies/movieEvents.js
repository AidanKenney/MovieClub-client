const getFormFields = require('./../../../lib/get-form-fields')
const movieApi = require('./movieApi')
const movieUi = require('./movieUi')
const collectionApi = require('./../collections/collectionApi')

const onCreateMovieButton = function () {
  event.preventDefault()
  // parent is the collection -- extract parent's id for API call
  const parentId = $(this).parent().attr('id')
  // make sure "create movie" button has not been added yet
  if ($('.create-movie').length === 0) {
    // prepend create movie form field to top of collection div
    $(`#${parentId}`).prepend(`
       <form class="create-movie"  class="form">
          <fieldset class="form-field">
            <h3>Add Movie</h3>
            <input id="title" name="movie[title]" type="text" placeholder="Title">
            <input id="releaseDate" name="movie[releaseDate]" type="number" placeholder="Release Year">
            <input id="description" name="movie[description]" type="text" placeholder="Description">
            <input type="submit" value="Submit">
         </fieldset>
      </form>
    `)
  }
}

const onCreateMovie = function (event) {
  event.preventDefault()

  const form = event.target
  const movieData = getFormFields(form)
  const parentId = $(this).parent().attr('id')

  movieApi.createMovie(movieData, parentId)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onCreateMovieSuccess)
    .catch(movieUi.onCreateMovieFailure)
}

const onUpdateMovieButton = function () {
  event.preventDefault()
  const parentId = $(this).parent().attr('id')
  if ($('.update-movie').length === 0) {
    $(`#${parentId}`).prepend(`
       <form class="update-movie form">
          <fieldset class="form-field">
            <h3>Update Movie</h3>
            <input id="title" name="movie[title]" type="text" placeholder="Title">
            <input id="releaseDate" name="movie[releaseDate]" type="number" placeholder="Release Year">
            <input id="description" name="movie[description]" type="text" placeholder="Description">
            <input type="submit" value="Submit">
         </fieldset>
      </form>
    `)
  }
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const movieData = getFormFields(form)
  const parentId = $(this).parent().attr('id')

  movieApi.updateMovie(movieData, parentId)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onUpdateMovieSuccess)
    .catch(movieUi.onUpdateMovieFailure)
}

const onDeleteMovie = function (event) {
  event.preventDefault()
  // extracting Id of parent element -- the Movie UL
  const parentId = $(this).parent().attr('id')
  // const movieData = getFormFields(form)

  movieApi.deleteMovie(parentId)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onDeleteMovieSuccess)
    .catch(movieUi.onDeleteMovieFailure)
}

module.exports = {
  onCreateMovie: onCreateMovie,
  onUpdateMovie: onUpdateMovie,
  onDeleteMovie: onDeleteMovie,
  onUpdateMovieButton: onUpdateMovieButton,
  onCreateMovieButton: onCreateMovieButton
}
