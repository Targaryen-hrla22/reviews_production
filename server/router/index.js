const express = require('express');
const router = express.Router();
const { reviewsCtrl } = require('./../controllers/listingCtrl.js');

router.route('/reviews')
  .get(reviewsCtrl.fetch);

router.route('/reviews/avg')
  .get(reviewsCtrl.findAverage);

module.exports = {
  router: router
};