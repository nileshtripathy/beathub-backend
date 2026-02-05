require('dotenv').config();
const mongoose = require('mongoose');

// Import Models
const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Song = require('../models/Song');
const User = require('../models/User');
const Playlist = require('../models/Playlist');

async function seed() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error('MONGO_URI is not set. Create a .env file with MONGO_URI or set the environment variable before running this script.');
      process.exit(1);
    }
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Artist.deleteMany({}),
      Album.deleteMany({}),
      Song.deleteMany({}),
      User.deleteMany({}),
      Playlist.deleteMany({})
    ]);

    // Create Artist
    const artist = await Artist.create({
      name: 'Daft Punk',
      genre: 'Electronic'
    });

    // Create Album (linked to Artist)
    const album = await Album.create({
      title: 'Discovery',
      releaseYear: 2001,
      artist: artist._id
    });

    // Create Song (linked to Album and Artist)
    const song = await Song.create({
      title: 'One More Time',
      duration: 320,
      album: album._id,
      artist: artist._id
    });

    // Create User
    const user = await User.create({
      username: 'music_fan_01',
      email: 'fan@example.com'
    });

    // Create Playlist (linked to User and Song)
    await Playlist.create({
      name: 'Gym Jams',
      user: user._id,
      songs: [song._id]
    });

    console.log('Seeding Complete!');
    process.exit(0);

  } catch (error) {
    console.error('Seeding Failed:', error);
    process.exit(1);
  }
}

// Run seed
seed();