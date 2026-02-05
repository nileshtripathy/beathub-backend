const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
	name: { type: String, required: true },
	genre: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Artist', ArtistSchema);
