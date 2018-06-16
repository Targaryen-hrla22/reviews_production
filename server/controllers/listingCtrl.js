const express = require('express');
const mongoose = require('mongoose');

const { dbReviews } = require('./../../db')
const { Review } = require('./../../db/models/listingReviewsModel.js');

const reviewsCtrl = {
  fetch: (req, res) => {
    // Review.find({listingId: parseInt(req.query.listingId)}, (err, reviews) => {
    Review.find({listing_id: 7}, (err, reviews) => {
      res.status(200).send(reviews);
    });
  },

  findAverage: (req,res) => {
    Review.aggregate([
      // {$match: {listingId: parseInt(req.query.listingId)}},
      {$match: {listing_id: 7}},
      {$group: {_id: {"listing_id": "$listing_id"}, 
                averageCom: { $avg: "$communication"},
                averageLoc: { $avg: "$location"},
                averageCheck: { $avg: "$checkIn"},
                averageClean: { $avg: "$cleanliness"},
                averageValue: { $avg: "$value"},
                averageAcc: { $avg: "$accuracy"}
            }}], (err, results) => {
        if (err) console.log('error in aggregation', err);
        // console.log('aggregation res ', results);
        res.status(200).send(results);
      })
  }
}

module.exports = {
  reviewsCtrl: reviewsCtrl
};