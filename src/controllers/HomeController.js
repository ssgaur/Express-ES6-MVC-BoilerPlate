import {BaseController} from './../core/BaseController';

export default class HomeController{
    
    constructor(router) {
        //super(basePath);
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getHome.bind(this));
        this.router.get('/lol', this.getLol.bind(this));
    }

    getHome = (req, res) => {
        res.send({"players": "dfdf"});
    }

    getLol = (req, res) => {
        res.send({"players": "booooooom"});
    }
}