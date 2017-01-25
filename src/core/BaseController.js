import express from "express";
import extend  from "extend";
 
export class BaseController {
    constructor(basePath) {
        this.prvBase = basePath;
        this.prvRouter = express.Router();
    }
 
    renderView(response, viewName, localData = {}) {
        let viewPath = this.prvBase + "/" + viewName;
        let defaultData = {
            title: "~~~Unknown~~~"
        };
        let data = extend(defaultData, localData);
        response.render(viewPath, data);
    }
 
    get basePath() {
        return this.prvBase;
    }
 
    get router() {
        return this.prvRouter;
    }
}