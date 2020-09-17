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
  console.log(collectionData)

  // send collection data to API via AJAX request t
  collectionApi.createCollection(collectionData)
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

module.exports = {
  onCreateCollection: onCreateCollection,
  onIndexCollections: onIndexCollections
}
