'use strict'

const storeCollections = require('./../storeCollections')
const collectionUi = require('./../collections/collectionUi')
const storeAuthErrors = require('./../storeAuthErrors')

const onCreateMovieSuccess = function (response) {
  storeCollections.collections = response.collections
  $('#msg').text('Create new movie success!')
  $('#create-movie').trigger('reset')
  $('#show-collections').html('')
  collectionUi.makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onCreateMovieFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Create new movie failed')
  $('#create-movie').trigger('reset')
}

const onUpdateMovieSuccess = function (response) {
  storeCollections.collections = response.collections
  $('#msg').text('Update move success!')
  $('#update-movie').trigger('reset')
  $('#show-collections').html('')
  collectionUi.makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onUpdateMovieFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Update move failed')
  $('#update-movie').trigger('reset')
}

const onDeleteMovieSuccess = function (response) {
  storeCollections.collections = response.collections
  $('#msg').text('Goodbye movie')
  $('#delete-movie').trigger('reset')
  $('#show-collections').html('')
  collectionUi.makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onDeleteMovieFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Delete movie failed')
  $('#delete-movie').trigger('reset')
}

module.exports = {
  onCreateMovieSuccess,
  onCreateMovieFailure,
  onUpdateMovieSuccess,
  onUpdateMovieFailure,
  onDeleteMovieSuccess,
  onDeleteMovieFailure
}
