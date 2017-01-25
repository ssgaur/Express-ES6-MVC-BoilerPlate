import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import path from 'path';
import session from 'express-session';
import compression from 'compression';

class Middleware {
  constructor(app, express) {
    this.app = app;
    this.express = express;

    this.useMiddleware();
  }

  useMiddleware = () => {
    if (global.PROD_ENV) {
      this.app.use(compression());
    }

    /*
    * Parse JSON
    * app.use(bodyParser.json());
    **/

    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));

    /*
    * Use PUT / DELETE HTTP verb
    * app.use(methodOverride());
    **/

    this.app.use(session({
      secret: 'sUperS3cr3t',
      saveUninitialized: true,
      resave: true,
    }));

    this.app.set('views', path.join(__dirname, '../views'));
    this.app.set('view engine', 'ejs');
    this.app.use(this.express.static(path.join(__dirname, '../assets')));
  }
}

export default Middleware;
