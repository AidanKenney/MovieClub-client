'use strict'

const storeCollections = require('./../storeCollections')
// const collectionEvents = require('./collectionEvents')
// const storeAuthErrors = require('./../storeAuthErrors')

const onCreateMovieSuccess = function (response) {
  console.log('Create movie success!', response)
  $('#msg').text('Create new movie success!')
  $('#create-movie').trigger('reset')
}

const onCreateMovieFailure = function (error) {
  console.log('Create movie failed', error)
  $('#msg').text('Create new movie failed')
  $('#create-movie').trigger('reset')
}

const onUpdateMovieSuccess = function (response) {
  console.log('Update Movie success!', response)
  $('#msg').text('Update move success!')
  $('#update-movie').trigger('reset')
}

const onUpdateMovieFailure = function (error) {
  console.log('Update Movie failed', error)
  $('#msg').text('Update move failed')
  $('#update-movie').trigger('reset')
}

module.exports = {
  onCreateMovieSuccess,
  onCreateMovieFailure,
  onUpdateMovieSuccess,
  onUpdateMovieFailure
}
