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

module.exports = {
  onCreateMovieSuccess,
  onCreateMovieFailure
}
