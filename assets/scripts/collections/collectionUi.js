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
  // $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
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
  // $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
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
  $('#msg').text('Collection updated. See updated colelctions below.')
  $('#show-collections').html('')
  makeListFromObjects(storeCollections.collections)
  // $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
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
      <form class="delete-collection"  class="form">
        <fieldset class="form-field">
          <input type="submit" value="Delete Collection">
        </fieldset>
      </form>
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
          <form class="delete-movie"  class="form">
            <fieldset class="form-field">
              <input type="submit" value="Delete Movie">
            </fieldset>
          </form>
        </ul>

        `)
    })
  })
}

// const makeListFromObjects = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     const movieArray = array[i].movies
//     $('#show-collections').append(`<div id="${array[i]._id}">${array[i].title}</div>`)
//     $('div').append(`<h6>${array[i].description}</h5>`)
//     addMovies(movieArray)
//   }
// }
//     // for (let i = 0; i < movieArray.length; i++) {
//     //   $('div').append(`<ul id="${movieArray[i]._id}">${movieArray[i].title}</ul>`)
//     //   $('ul').append(`<li>${movieArray[i].releaseDate}</li>`)
//     //   $('ul').append(`<li>${movieArray[i].description}</li>`)
//
// const addMovies = function (arrayOfMovies) {
//   arrayOfMovies.forEach(property => {
//     $('div').append(`<ul id="${property._id}">${property.title}</ul>`)
//     $('ul').append(`<li>${property.releaseDate}</li>`)
//     $('ul').append(`<li>${property.description}</li>`)
//   })
// }

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
