/*
<artists page="1" perPage="50" totalPages="20" total="1000">
  <artist>
    <name>The Beatles</name>
    <playcount>1550293</playcount>
    <listeners>114106</listeners>
    <mbid>b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d</mbid>
    <url>http://www.last.fm/music/The+Beatles</url>
    <streamable>1</streamable>
    <image size="small">http://userserve-ak.last.fm/serve/34/880929.jpg</image>
    <image size="medium">http://userserve-ak.last.fm/serve/64/880929.jpg</image>
    <image size="large">http://userserve-ak.last.fm/serve/126/880929.jpg</image>
    <image size="extralarge">http://userserve-ak.last.fm/serve/252/880929.jpg</image>
    <image size="mega">http://userserve-ak.last.fm/serve/500/880929/The+Beatles.jpg</image>
  </artist>
  ...
</artists>

Last FM
API KEY 16cd9cf83f2037a4941ca1c74686a557

http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=16cd9cf83f2037a4941ca1c74686a557&format=json

*/

// The address of where to retrieve data
const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=16cd9cf83f2037a4941ca1c74686a557&format=json';
let artistName = "";
let collection = [];
let videoSrc = "";
let init;
let getVidId;

// Creates an array from the api.
export default function () {

  init = function() {

  $.ajax({
                url: URL,
                success: function(data) {

                  for (var i = 0;data.artists.artist.length > i;i++) {
                collection.push([{url: data.artists.artist[i].image[4]['#text']}, {name: data.artists.artist[i].name}, {playcount: data.artists.artist[i].playcount}, {listeners: data.artists.artist[i].listeners}, {small: data.artists.artist[i].image[1]['#text']}]);
                  }
                  artistName = collection[0][1].name;
                  console.log(artistName);
                },
                error: function(data) {

                    console.log('ERROR');
        // TODO add error handler for user in case of api failure.
                }
            });

    return collection;
  };


  getVidId = function(artistName) {

           $.ajax({
                      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=' + artistName + '&key=AIzaSyBTi0oe7u39BGm7WSXc45MJ99p06hO5Sng&format=json',
                      success: function(data) {

                       videoSrc = "https://www.youtube.com/embed/" + data.items[1].id['videoId'];
                       collection.push({video: videoSrc})
                       console.log(videoSrc);
                       return videoSrc;
                      },
                      error: function(data) {

                          console.log('ERROR');
              // TODO add error handler for user in case of api failure.
                      }
                  });
       }

    init();
    getVidId("Coldplay");

    console.log(collection)
  return collection;
}





















