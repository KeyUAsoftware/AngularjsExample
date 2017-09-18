import angular from "angular";
import uiRouter from "angular-ui-router";
import UiBootsrap from "angular-ui-bootstrap"
import RouteConfig from "./app.route.js";

import ListCtrl from "./controllers/list.controller.js";
import AddVideoCtrl from "./controllers/add-video.controller.js";
import InfoCtrl from "./controllers/info.controller.js";
import DataService from "./services/data.service.js"


const appModule = angular.module('app', [uiRouter, UiBootsrap]);



appModule.config(RouteConfig);
appModule.controller('ListCtrl', ListCtrl);
appModule.controller('InfoCtrl', InfoCtrl);
appModule.controller('AddVideoCtrl', AddVideoCtrl);
appModule.service('DataService', DataService);

