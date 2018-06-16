const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  body: String,
  dateCreated: String,
  userId: Number,
  listing_id: Number,
  communication: Number,
  location: Number,
  checkIn: Number,
  cleanliness: Number,
  value: Number,
  accuracy: Number,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = {
  Review: Review
};

