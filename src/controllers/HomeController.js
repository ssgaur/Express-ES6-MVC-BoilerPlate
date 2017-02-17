import {BaseController} from './../core/BaseController';

class HomeController extends BaseController{
    
    constructor(router, basePath) {
        super(basePath);
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
        let newData = {"lol":"moom","poo":"wer"};
        this.renderView(res, "register", newData);
    }
};

export default HomeController;