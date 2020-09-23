const getFormFields = require('./../../../lib/get-form-fields')
const collectionApi = require('./collectionApi')
const collectionUi = require('./collectionUi')
// const store = require('./../store')

const onCreateCollection = function (event) {
  event.preventDefault()
  // save click event's target in form variable
  const form = event.target
  // save extracted formfield data as variable collectionData
  const collectionData = getFormFields(form)

  // send collection data to API via AJAX request t
  collectionApi.createCollection(collectionData)
    // .then(() => collectionApi.indexCollections())
  // handle successful API response
    .then(collectionUi.onCreateCollectionSuccess)
  // handle failed API response
    .catch(collectionUi.onCreateCollectionFailure)
}

const onIndexCollections = function () {
  event.preventDefault()
  collectionApi.indexCollections()
  // handle successful API response
    .then(collectionUi.onIndexCollectionsSuccess)
  // handle failed API response
    .catch(collectionUi.onIndexCollectionsFailure)
}

const onDeleteCollection = function (event) {
  event.preventDefault()
  const parentId = $(this).parent().attr('id')

  // // send AJAX request with id from form field
  collectionApi.deleteCollection(parentId)
    .then(() => collectionApi.indexCollections())
    .then(collectionUi.onDeleteCollectionSuccess)
    .catch(collectionUi.onDeleteCollectionFailure)
}

const onUpdateCollectionButton = function () {
  event.preventDefault()
  const parentId = $(this).parent().attr('id')

  if ($('.update-collection').length === 0) {
    $(`#${parentId}`).prepend(`
       <form class="update-collection"  class="form">
          <fieldset class="form-field">
            <h3>Update Collection</h3>
            <input id="title" name="collection[title]" type="text" placeholder="Title">
            <input id="description" name="collection[description]" type="text" placeholder="Description">
            <input type="submit" value="Submit">
         </fieldset>
      </form>
    `)
  }
}

const onUpdateCollection = function (event) {
  event.preventDefault()
  const form = event.target
  const collectionData = getFormFields(form)
  const parentId = $(this).parent().attr('id')

  collectionApi.updateCollection(collectionData, parentId)
    .then(() => collectionApi.indexCollections())
    .then(collectionUi.onUpdateCollectionSuccess)
    .catch(collectionUi.onUpdateCollectionFailure)
}

module.exports = {
  onCreateCollection: onCreateCollection,
  onIndexCollections: onIndexCollections,
  onDeleteCollection: onDeleteCollection,
  onUpdateCollection: onUpdateCollection,
  onUpdateCollectionButton: onUpdateCollectionButton
}
