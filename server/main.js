const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')
const app = express()
const bodyParser = require('body-parser');

var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var apIport = process.env.API_PORT || 3001;


//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!', dev: 'Dans first Api Server' });
});
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(apIport, function() {
 console.log(`api running on port ${apIport}`);
});
/*
var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3001/tasks',
  headers:
   { 'postman-token': '0ce11ece-85ae-46cc-93ee-74a2dd1e1eac',
     'cache-control': 'no-cache',
     'access-control-allow-origin': 'http://danweatherbee-front-end-web-developer.com' },
  form: { name: 'front end dev' } };

var options2 = { method: 'GET',
  url: 'http://localhost:3001/tasks',
  headers:
   { 'postman-token': '0ce11ece-85ae-46cc-93ee-74a2dd1e1eac',
     'cache-control': 'no-cache',
     'access-control-allow-origin': 'http://danweatherbee-front-end-web-developer.com' },
  form: { name: 'front end dev' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

request(options2, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

*/
app.use(compress())

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
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)))

}

module.exports = app
