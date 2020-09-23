'use strict'

const storeCollections = require('./../storeCollections')
// const collectionEvents = require('./collectionEvents')
const storeAuthErrors = require('./../storeAuthErrors')

const onCreateCollectionSuccess = function (response) {
  storeCollections.collection = response.collection
  $('#msg').text('Create new collection success!')
  $('#create-collection').trigger('reset')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onCreateCollectionFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Create new collection failure.')
  $('#create-collection').trigger('reset')
}

const onIndexCollectionsSuccess = function (response) {
  storeCollections.collections = response.collections
  if (storeCollections.collections.length === 0) {
    $('#msg').text('You have no collections. Create one now!')
  } else {
    $('#msg').text('See your collections below.')
  }
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onIndexCollectionsFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Could not find your collections.')
}

const onDeleteCollectionSuccess = function (response) {
  storeCollections.collections = response.collections
  $('#msg').text('Successful delete, goodbye collection.')
  $('#delete-collection').trigger('reset')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onDeleteCollectionFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Delete failed.')
  $('#delete-collection').trigger('reset')
}

const onUpdateCollectionSuccess = function (response) {
  storeCollections.collections = response.collections
  $('#update-collection').trigger('reset')
  $('#msg').text('Collection updated. See updated collections below.')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onUpdateCollectionFailure = function (error) {
  storeAuthErrors.error = error
  $('#msg').text('Update failed.')
  $('#update-collection').trigger('reset')
}

const onLinkToSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onBackToSignUp = function () {
  $('#sign-in').hide()
  $('#sign-up').show()
}

const makeListFromObjects = function (collections) {
  // loop through each collection
  collections.forEach(function (collection) {
    // append elements to show-collections section
    // give div collection's id, add title and description on different lines
    $('#show-collections').append(`
      <div id="${collection._id}" class="list col-4">
        <p class="coll-title">${collection.title}</p>
        <p class="coll-description"> ${collection.description}</p>
          <div id="${collection._id}-movie-section"></div>
        <button class="create-movie-button col-4-sm">Add Movie</button>
        <button class="update-collection-button col-4-sm">Edit Collection</button>
        <button class="delete-collection col-4-sm">Delete Collection</button>
      </div>
      `)
    // loop through each movie
    collection.movies.forEach(function (movie) {
      // append movie ULs with release Date and description as LIs to c
      // collectionID div
      $(`#${collection._id}-movie-section`).append(`
        <ul id="${movie._id}" class="video-look">${movie.title}
          <li>${movie.releaseDate}</li>
          <li>${movie.description}</li>
          <button class="update-movie-button">Update</button>
          <button class="delete-movie">Delete</button>
        </ul>
        `)
    })
  })
}

module.exports = {
  onCreateCollectionSuccess: onCreateCollectionSuccess,
  onCreateCollectionFailure: onCreateCollectionFailure,
  onIndexCollectionsSuccess: onIndexCollectionsSuccess,
  onIndexCollectionsFailure: onIndexCollectionsFailure,
  onDeleteCollectionSuccess: onDeleteCollectionSuccess,
  onDeleteCollectionFailure: onDeleteCollectionFailure,
  onUpdateCollectionSuccess: onUpdateCollectionSuccess,
  onUpdateCollectionFailure: onUpdateCollectionFailure,
  onLinkToSignIn: onLinkToSignIn,
  makeListFromObjects: makeListFromObjects,
  onBackToSignUp: onBackToSignUp
}
