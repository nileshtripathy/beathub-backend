const mongoose = require('mongoose');
const { Schema } = mongoose;

const SongSchema = new Schema({
	title: { type: String, required: true },
	duration: { type: Number },
	album: { type: Schema.Types.ObjectId, ref: 'Album' },
	artist: { type: Schema.Types.ObjectId, ref: 'Artist' }
}, { timestamps: true });

module.exports = mongoose.model('Song', SongSchema);
