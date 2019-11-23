"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var service_controller_1 = require("../controllers/service.controller");
var router = express_1.Router();
router.route('/:b')
    .get(service_controller_1.getServicios);
exports.default = router;
