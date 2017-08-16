const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=16cd9cf83f2037a4941ca1c74686a557&format=json';
let artistName = "";
let collection = [];
let videos = [];
let videoSrc = "";
let init;
let getVidId;

export default function() {

  init = function() {

    $.ajax({
      url: URL,
      success: function(data) {
        console.log(data)
        for (var i = 0; data.artists.artist.length > i; i++) {
          collection.push([{ large: data.artists.artist[i].image[4]['#text'] }, { name: data.artists.artist[i].name }, { playcount: data.artists.artist[i].playcount }, { listeners: data.artists.artist[i].listeners }, { url: data.artists.artist[i].url }, { small: data.artists.artist[i].image[1]['#text'] }, { id: i }]);

          artistName = collection[i][1].name;

          getVidId(artistName, i);
        }
      },
      error: function(data) {

        console.log('ERROR Lastfm api.');
        return;

      }
    });
  };

  getVidId = function(artistName, i) {

    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=' + artistName +
       '&key=AIzaSyBTi0oe7u39BGm7WSXc45MJ99p06hO5Sng&format=json',
      success: function(data) {

        if (data.items[1].id['videoId'] === undefined) {
          videoSrc = "https://www.youtube.com/embed/JJvdp0XpSj0";
          collection[i].push({ video: videoSrc });
          return
        }

        videoSrc = "https://www.youtube.com/embed/" + data.items[1].id['videoId'];
        collection[i].push({ video: videoSrc });

        return
      },
      error: function(data) {

        collection[i].push({ video: "http://via.placeholder.com/350x150" });
        console.log('ERROR youtube api');
        return;

      }
    });
  }
  init();
  console.log(collection)
  return collection;
};
