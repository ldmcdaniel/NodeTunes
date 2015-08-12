var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');
    collection.find().toArray(function (err, artists) {
      var submittedArtists = artists.map(function(artist) {
        return {
          _id: artist._id,
          name: artist.name,
          bio: artist.bio,
          genre: artist.genre
        }
      });
    res.render('templates/artists-index', {artists: submittedArtists});
  });
});

router.post('/delete/:id', function (req, res) {
  var collection = global.db.collection('artists');
  collection.remove({_id: ObjectID(req.params.id)}, function () {
    res.redirect('/')
  });
})

router.get('/new', function (req, res) {
  res.render('templates/artist-new');
})

router.post('/new', function (req, res) {
  var collection = global.db.collection('artists');

  collection.save(req.body, function () {
    console.log(req.body);
    res.redirect('/');
  })
});

module.exports = router;
