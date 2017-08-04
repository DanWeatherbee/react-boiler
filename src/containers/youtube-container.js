import React, {Component} from 'react';


const style = {
    color: "white",
    backgroundColor: "black",
    marginTop: "1%"
}
let videoSrc = "";
let collection = [];
let result = "";
let vidID = ""
class YouTube extends Component {

    getLastFm() {

           $.ajax({
              url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=16cd9cf83f2037a4941ca1c74686a557&format=json",
              success: function(data) {
                for (var i = 0;data.artists.artist.length > i;i++) {
              collection.push([{name: data.artists.artist[i].name}]);
                }

              },
              error: function(data) {

                  console.log('ERROR');
      // TODO add error handler for user in case of api failure.
              }
          });

           if (collection[2] === undefined) {
            return

           }

           result = collection[3][0].name;

           vidID = this.getVidId(result);
           // result = collection[2];
           //   this.getVidId(result);
           console.log(vidID);
           return collection;
    }




    getVidId(artistName) {

           $.ajax({
                      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=' + artistName + '&key=AIzaSyBTi0oe7u39BGm7WSXc45MJ99p06hO5Sng&format=json',
                      success: function(data) {

                       videoSrc = "https://www.youtube.com/embed/" + data.items[1].id['videoId'];
                      },
                      error: function(data) {

                          console.log('ERROR');
              // TODO add error handler for user in case of api failure.
                      }

                  });

           return videoSrc;
    }

    render() {

            return(
                        <div>
                        <iframe width="500" height= "318" src={this.getLastFm()} ></iframe>
                        </div>
                );
    }
}

export default YouTube;
