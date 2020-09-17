'use strict'

const events = require('./auth/events')
const collectionEvents = require('./collections/collectionEvents')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#create-collection').on('submit', collectionEvents.onCreateCollection)
  $('#index-collections').on('submit', collectionEvents.onIndexCollections)
  $('#delete-collection').on('submit', collectionEvents.onDeleteCollection)
  $('#update-collection').on('submit', collectionEvents.onUpdateCollection)
})
