const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlbumSchema = new Schema({
	title: { type: String, required: true },
	releaseYear: { type: Number },
	artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Album', AlbumSchema);
