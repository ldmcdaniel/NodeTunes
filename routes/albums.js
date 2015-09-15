var express = require('express');

var router = express.Router();

// var result = document.getElementsByName("artist");

router.get('/', function (req, res) {
  // var collection = global.db.collection('artists');
  // var albumsCol = global.db.collection('albums');
    // collection.find().toArray(function (err, albums) {
    //   var submittedAlbums = albums.map(function(album) {
    //     return {
    //       _id: album._id,
    //       name: album.name,
    //       bio: album.bio,
    //       genre: album.genre
    //     }
    //   });
  res.render('templates/albums-search');
        // {albums: submittedAlbums, artists: submittedArtists}
        // );
  // });
});

module.exports = router;
