const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://abadankaristad:131013@cluster0.ynvx0.mongodb.net/annotations?retryWrites=true&w=majority&appName=Cluster0';

const connection = mongoose.connect(dbConfig);

module.exports = connection;

