'use strict'

const events = require('./auth/events')
const collectionEvents = require('./collections/collectionEvents')
const collectionUi = require('./collections/collectionUi')
const movieEvents = require('./movies/movieEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-collection').hide()
  $('#index-collections').hide()
  $('#delete-collection').hide()
  $('#update-collection').hide()
  $('#create-movie').hide()
  $('#update-movie').hide()
  $('#delete-movie').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#create-collection').on('submit', collectionEvents.onCreateCollection)
  $('#index-collections').on('submit', collectionEvents.onIndexCollections)
  $('#show-collections').on('click', '.delete-collection', collectionEvents.onDeleteCollection)
  $('#show-collections').on('click', '.update-collection-button', collectionEvents.onUpdateCollectionButton)
  $('#show-collections').on('submit', '.update-collection', collectionEvents.onUpdateCollection)
  $('#link-to-sign-in').on('click', collectionUi.onLinkToSignIn)
  $('#create-movie').on('submit', movieEvents.onCreateMovie)
  $('#show-collections').on('click', '.update-movie-button', movieEvents.onUpdateMovieButton)
  $('#show-collections').on('submit', '.update-movie', movieEvents.onUpdateMovie)
  $().on('click', '.delete-movie', movieEvents.onDeleteMovie)
})
