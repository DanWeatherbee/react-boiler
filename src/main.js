import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import './styles/main.scss';

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')



var canvas = document.createElement("canvas"),
  ctx = canvas.getContext("2d");

canvas.render = function() {
  console.log(this.width);
  this.width = innerWidth - 20;
  this.height = innerHeight - 875;
  this.id = "game-area";
  this.style = "background-color:black;";
  document.body.insertBefore(this, document.body.childNodes[0]);
};
canvas.init = function() {
  this.render();
};
canvas.clear = function() {
  ctx.clearRect(0, 0, this.width, this.height);
};
canvas.random = function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
canvas.color = function(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  return "rgba(" +
    this.a.toString() +
    ", " +
    this.b.toString() +
    ", " +
    this.c.toString() +
    ", " +
    this.d.toString() +
    ")";
};

canvas.init();
var mouse = {
    x: undefined,
    y: undefined
  },
  maxRadius = 50,
  minRadius = 1;

function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = canvas.color(
    canvas.random(255),
    canvas.random(255),
    canvas.random(255),
    canvas.random(255)
  );
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    this.update();
  };
  this.update = function() {
    if (this.x + this.radius * 2 > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius * 2 > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // Interactivity

    if (mouse.x - this.x < 100 &&
      mouse.x - this.x > -100 &&
      mouse.y - this.y < 100 &&
      mouse.y - this.y > -100) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }

    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }

  }
};

var circleArray = [];

for (var i = 0; i <= 2000; i++) {
  circleArray.push(
    new Circle(
      canvas.random(innerWidth),
      canvas.random(innerHeight),
      minRadius,
      canvas.random(4),
      canvas.random(4)
    )
  )
};

window.addEventListener('mousemove',
  function(evt) {
    mouse.x = evt.pageX;
    mouse.y = evt.pageY;
  });

function Engine() {
  requestAnimationFrame(Engine);
  canvas.clear();
  circleArray.forEach(function(i) {
    i.draw();
  });
};
Engine();

let render = () => {
  const App = require('./components/App').default
  // const routes = require('./routes/index').default(store)

  ReactDOM.render( <
    App store = { store }
    />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render( < RedBox error = { error }
        />, MOUNT_NODE)
      }

      render = () => {
        try {
          renderApp()
        } catch (e) {
          console.error(e)
          renderError(e)
        }
      }

      // Setup hot module replacement
      module.hot.accept([
          './components/App'
        ], () =>
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(MOUNT_NODE)
          render()
        })
      )
    }
  }

  // Let's Go!
  // ------------------------------------
  if (!__TEST__) render()
