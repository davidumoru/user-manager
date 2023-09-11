const newman = require('newman');

const collectionFile = './user-manager.postman_collection.json';

// Run the collection
newman.run({
  collection: require(collectionFile),
  reporters: 'cli',
}, function (err) {
  if (err) {
    console.error('Error running collection:', err);
  } else {
    console.log('Collection run completed successfully');
  }
});
