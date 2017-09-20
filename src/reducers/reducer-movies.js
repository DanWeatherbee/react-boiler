// Movie reducer using async functions:


var URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=16cd9cf83f2037a4941ca1c74686a557&format=json';



var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
        async function logFetch(URL) {
          try {
            var response = await fetch(URL);
            console.log(await response);
          }
          catch (err) {
            console.log('fetch failed', err);
          }
        }
  if (!response == undefined) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});