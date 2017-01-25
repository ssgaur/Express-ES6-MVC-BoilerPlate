import express from 'express';
import path from 'path';
import fs from 'fs';

class RouteMapper {

	constructor(){
	}

	mapControllers = (app) => {
		fs.readdirSync(path.join(__dirname, '../../app/controllers')).forEach(function (file) {
		    if (file.substr(-3) === ".js") {
		        let basePath = path.basename(file, ".js");
		        let MyController = require(path.join(__dirname, '../../app/controllers/')+basePath).default;
		        let newRouter = express.Router();
		        let urlPath = basePath.toString().slice(0,-10).toLowerCase();
		        app.use("/"+urlPath, newRouter);
		        let controller = new  MyController(newRouter, urlPath);
		    }
		});
	}
};

export default RouteMapper;