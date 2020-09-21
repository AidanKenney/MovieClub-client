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

const onUpdateMovieButton = function () {
  event.preventDefault()
  const parentId = $(this).parent().attr('id')
  // console.log(parentId)
  if ($('.update-movie').length === 0) {
    $(`#${parentId}`).prepend(`
       <form class="update-movie"  class="form">
          <fieldset class="form-field">
            <h3>Update Collection</h3>
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
  console.log(movieData)
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
  console.log(parentId)

  movieApi.deleteMovie(parentId)
    .then(() => collectionApi.indexCollections())
    .then(movieUi.onDeleteMovieSuccess)
    .catch(movieUi.onDeleteMovieFailure)
}

module.exports = {
  onCreateMovie: onCreateMovie,
  onUpdateMovie: onUpdateMovie,
  onDeleteMovie: onDeleteMovie,
  onUpdateMovieButton: onUpdateMovieButton
}
