import express from 'express';
import http from 'http';
import RouteMapper from './routes/RouteMapper';
import Middleware from './config/Middleware';

let app     = express();
let server  = http.createServer(app);

/**
* MIDDLEWARE
********************* */
let middleware = new Middleware(app, express);

/**
* ROUTES
********************* */
let routes = new RouteMapper();
routes.mapControllers(app);

/**
* Default Routes
********************* */
app.use((req, res, next) => {
  res.status(404);
  res.render('global/404', {
    title: 'Page introuvable !',
  });
});

app.use((req, res, next) => {
  res.status(500);
  res.render('global/500', {
    title: 'Internal Server Error !',
  });
});

server.listen(8080);
console.log('Server started on localhost:8080\n');
