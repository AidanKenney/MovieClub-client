'use strict'

const storeCollections = require('./../storeCollections')
// const collectionEvents = require('./collectionEvents')
// const storeAuthErrors = require('./../storeAuthErrors')

const onCreateCollectionSuccess = function (response) {
  storeCollections.collection = response.collection
  console.log('Create collections successful! Collection is', storeCollections.collection)
  $('#msg').text('Create new collection success!')
  $('#create-collection').trigger('reset')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onCreateCollectionFailure = function (error) {
  console.log('Error! Error is', error)
  $('#msg').text('Create new collection failure.')
  $('#create-collection').trigger('reset')
}

const onIndexCollectionsSuccess = function (response) {
  storeCollections.collections = response.collections
  console.log('Index request success! Here are your collections', response)
  $('#msg').text('See your collections below.')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onIndexCollectionsFailure = function (error) {
  console.log('Oh no... could not get collections', error)
  $('#msg').text('Could not find your collections.')
}

const onDeleteCollectionSuccess = function (response) {
  console.log('Collection deleted successfully', response)
  storeCollections.collections = response.collections
  $('#msg').text('Successful delete, goodbye collection.')
  $('#delete-collection').trigger('reset')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onDeleteCollectionFailure = function (error) {
  console.log('Problem deleting collection. Error is', error)
  $('#msg').text('Delete failed.')
  $('#delete-collection').trigger('reset')
}

const onUpdateCollectionSuccess = function (response) {
  console.log('Successfully updated collection', response)
  storeCollections.collections = response.collections
  console.log('Update succesful! Here are your collections', response)
  $('#update-collection').trigger('reset')
  $('#msg').text('Collection updated. See updated collections below.')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  $('#show-collections').show()
}

const onUpdateCollectionFailure = function (error) {
  console.log('Problem updating collection', error)
  $('#msg').text('Update failed.')
  $('#update-collection').trigger('reset')
}

const onLinkToSignIn = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
}

const makeListFromObjects = function (collections) {
  // loop through each collection
  collections.forEach(function (collection) {
    console.log('collection is ', collection)
    // append elements to show-collections section
    // give div collection's id, add title and description on different lines
    $('#show-collections').append(`
      <div id="${collection._id}">
      <p>${collection.title} <br> ${collection.description}</p>
      <button class="create-movie-button">Add Movie</button>
      <button class="update-collection-button">Edit Collection Info</button>
      <button class="delete-collection">Delete Collection</button>
      </div>
      `)
    // loop through each movie
    collection.movies.forEach(function (movie) {
      console.log('movie is ', movie)
      // append movie ULs with release Date and description as LIs to c
      // collectionID div
      $(`#${collection._id}`).append(`
        <ul id="${movie._id}">${movie.title}
          <li>${movie.releaseDate}</li>
          <li>${movie.description}</li>
          <button class="update-movie-button">Update Movie</button>
          <button class="delete-movie">Delete Movie</button>
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
  makeListFromObjects: makeListFromObjects
}
