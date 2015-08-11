var mongo = require('mongodb').MongoClient;

var URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/nodeTunes';

mongo.connect(URL, function(err, db) {
  global.db = db;
});
