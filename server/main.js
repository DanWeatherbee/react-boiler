const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')
const app = express()

app.use(compress())

/*
 * Copyright (c) 2017 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Written with: mongoose@4.7.7
 * Documentation: http://mongoosejs.com/docs/guide.html
 * A Mongoose script connecting to a MongoDB database given a MongoDB Connection URI.
 */
var mongoose = require('mongoose');

var uri = 'mongodb://localhost:27017';

mongoose.Promise = global.Promise

mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

  // Create song schema
  var songSchema = mongoose.Schema({
    decade: String,
    artist: String,
    song: String,
    weeksAtOne: Number
  });

  // Store song documents in a collection called "songs"
  var Song = mongoose.model('songs', songSchema);

  // Create seed data
  var seventies = new Song({
    decade: '1970s',
    artist: 'Debby Boone',
    song: 'You Light Up My Life',
    weeksAtOne: 10
  });

  var eighties = new Song({
    decade: '1980s',
    artist: 'Olivia Newton-John',
    song: 'Physical',
    weeksAtOne: 10
  });

  var nineties = new Song({
    decade: '1990s',
    artist: 'Mariah Carey',
    song: 'One Sweet Day',
    weeksAtOne: 16
  });

  /*
   * First we'll add a few songs. Nothing is required to create the
   * songs collection; it is created automatically when we insert.
   */
  var list = [seventies, eighties, nineties]
  Song.insertMany(list);

  /*
   * Then we need to give Boyz II Men credit for their contribution
   * to the hit "One Sweet Day".
   */
  Song.update({ song: 'One Sweet Day'}, { $set: { artist: 'Mariah Carey ft. Boyz II Men'} },
    function (err, numberAffected, raw) {

      if (err) return handleError(err);

      /*
       * Finally we run a query which returns all the hits that spend 10 or
       * more weeks at number 1.
       */
      Song.find({ weeksAtOne: { $gte: 10} }).sort({ decade: 1}).exec(function (err, docs){

        if(err) throw err;

        docs.forEach(function (doc) {
          console.log(
            'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] +
            ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
          );
        });

        // Since this is an example, we'll clean up after ourselves.
        mongoose.connection.db.collection('songs').drop(function (err) {
          if(err) throw err;

          // Only close the connection when your app is terminating
          mongoose.connection.db.close(function (err) {
            if(err) throw err;
          });
        });
      });
    }
  )
});
// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  logger.info('Enabling webpack development and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(project.basePath, project.srcDir),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.


  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  logger.warn(
    `Server is being run outside of live development mode, meaning it will
    only serve the compiled application bundle in ~/dist. Generally you
    do not need an application server for this and can instead use a web
    server such as nginx to serve your static files. See the "deployment"
    section in the README for more information on deployment strategies.`
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)))

}

module.exports = app
