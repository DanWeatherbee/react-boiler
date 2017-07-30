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


// Creates an array from the api.
export default function () {
  let collection = [];
   $.ajax({
              url: URL,
              success: function(data) {
                for (var i = 0;data.artists.artist.length > i;i++) {
              collection.push(data.artists.artist[i].image[4]['#text']);
                }

              console.log(data.artists.artist);

              },
              error: function(data) {

                  console.log('ERROR');
      // TODO add error handler for user in case of api failure.
              }
          });
  return collection;
}





















