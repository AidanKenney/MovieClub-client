'use strict'

const storeCollections = require('./../storeCollections')
// const collectionEvents = require('./collectionEvents')
// const storeAuthErrors = require('./../storeAuthErrors')

const onCreateMovieSuccess = function (response) {
  storeCollections.collections = response.collections
  console.log('Create movie success!', response)
  $('#msg').text('Create new movie success!')
  $('#create-movie').trigger('reset')
  $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
  $('#show-collections').show()
}

const onCreateMovieFailure = function (error) {
  console.log('Create movie failed', error)
  $('#msg').text('Create new movie failed')
  $('#create-movie').trigger('reset')
}

const onUpdateMovieSuccess = function (response) {
  storeCollections.collections = response.collections
  console.log('Update Movie success!', response)
  $('#msg').text('Update move success!')
  $('#update-movie').trigger('reset')
  $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
  $('#show-collections').show()
}

const onUpdateMovieFailure = function (error) {
  console.log('Update Movie failed', error)
  $('#msg').text('Update move failed')
  $('#update-movie').trigger('reset')
}

const onDeleteMovieSuccess = function (response) {
  storeCollections.collections = response.collections
  console.log('Delete movie success!', response)
  $('#msg').text('Goodbye movie')
  $('#delete-movie').trigger('reset')
  $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
  $('#show-collections').show()
}

const onDeleteMovieFailure = function (error) {
  console.log('Delete movie failed', error)
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
