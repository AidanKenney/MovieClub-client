'use strict'

const storeCollections = require('./../storeCollections')
// const collectionEvents = require('./collectionEvents')
// const storeAuthErrors = require('./../storeAuthErrors')

const onCreateCollectionSuccess = function (response) {
  storeCollections.collection = response.collection
  console.log('Create collections successful! Collection is', storeCollections.collection)
  $('#msg').text('Create new collection success!')
  $('#create-collection').trigger('reset')
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
  $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
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
  $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
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
  $('#show-collections').html(JSON.stringify(storeCollections.collections, null, 2))
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

module.exports = {
  onCreateCollectionSuccess: onCreateCollectionSuccess,
  onCreateCollectionFailure: onCreateCollectionFailure,
  onIndexCollectionsSuccess: onIndexCollectionsSuccess,
  onIndexCollectionsFailure: onIndexCollectionsFailure,
  onDeleteCollectionSuccess: onDeleteCollectionSuccess,
  onDeleteCollectionFailure: onDeleteCollectionFailure,
  onUpdateCollectionSuccess: onUpdateCollectionSuccess,
  onUpdateCollectionFailure: onUpdateCollectionFailure,
  onLinkToSignIn: onLinkToSignIn
}
