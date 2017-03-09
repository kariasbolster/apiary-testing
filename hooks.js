'use strict';

hooks = require('hooks');

stash = {}

// Stash the token we've got
after('/login > POST > 200 > application/json', function (transaction) {
  stash.token = JSON.parse(transaction.real.body).token;
});

// Add the token to all HTTP transactions
beforeEach(function (transaction) {
  if (stash.token) {
    transaction.headers['X-Api-Key'] = stash.token
  };
});

// Stash the car ID we've got
after('/cars > GET > 200 > application/json', function (transaction) {
  stash.carId = JSON.parse(transaction.real.body).id;
});

// Replace car ID in request with the one we've stashed
before('/cars/{id} > PATCH > 200 > application/json', function (transaction) {
  transaction.fullPath = transaction.fullPath.replace('42', stash.carId)
  transaction.request.uri = transaction.fullPath
});
