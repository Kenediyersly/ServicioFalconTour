"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ranquing_controller_1 = require("../controllers/ranquing.controller");
var router = express_1.Router();
router.route('/:id')
    .get(ranquing_controller_1.getRanquing);
router.route('/list/:id')
    .get(ranquing_controller_1.getTopRanquing);
router.route('/')
    .post(ranquing_controller_1.postInsertRanking);
exports.default = router;
