import express from "express";
import extend  from "extend";
 
export class BaseController {
    constructor(basePath) {
        this.basePath = basePath;
    }
 
    renderView(response, viewName, localData = {}) {
        let viewPath = this.basePath + "/" + viewName;
        let defaultData = {
            title: "~~~Unknown~~~"
        };
        let data = extend(defaultData, localData);
        response.render(viewPath, data);
    }
}