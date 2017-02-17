import express from 'express';
import path from 'path';
import fs from 'fs';

class RouteMapper {

	constructor(){
	}

	mapControllers = (app) => {
		let basePath, Controller, router, urlPath, bindControllerRoutes;
		fs.readdirSync(path.join(__dirname, '../../app/controllers')).forEach(function (file) {
		    if (file.substr(-3) === ".js") {
		        basePath = path.basename(file, ".js");
		        Controller = require(path.join(__dirname, '../../app/controllers/')+basePath).default;
		        router = express.Router();
		        urlPath = basePath.toString().slice(0,-10).toLowerCase();
		        app.use("/"+urlPath, router);
		        bindControllerRoutes = new  Controller(router, urlPath);
		    }
		});
	}
};

export default RouteMapper;