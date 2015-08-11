var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
  var collection = global.db.collection('nodeTunes');
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

router.get('/new', function (req, res) {
  res.render('templates/artist-new');
})

router.post('/new', function (req, res) {
  var collection = global.db.collection('nodeTunes');

  collection.save(req.body, function () {
    console.log(req.body);
    res.redirect('/');
  })
});

module.exports = router;
