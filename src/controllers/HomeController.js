import {BaseController} from './../core/BaseController';
import User from './../models/User';

class HomeController extends BaseController{
    
    constructor(router, basePath) {
        super(basePath);
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getHome.bind(this));
        this.router.get('/lol', this.getLol.bind(this));
        this.router.get('/pop', this.getPop.bind(this));
        this.router.get('/insert', this.getInsert.bind(this));
    }

    getHome = (req, res) => {
        res.send({"players": "dfdf"});
    }

    getLol = (req, res) => {
        let newData = {"lol":"moom","poo":"wer"};
        this.renderView(res, "register", newData);
    }

    getPop = (req,res) => {
        var user = new User();
        user.getAll(function(data){
            res.json(data);
        });
    };

    getInsert = (req, res) => {
        var user = new User();
        var data = {name: "Lenovo" , email: "lebono@ndloe.com", password: "someapsdfad", token: "bdajbfeggd8gf7df8dfg7dsgfdf8"};
        user.insert(data, function(results){
            res.json(results);
        });
    }
}; 

export default HomeController;