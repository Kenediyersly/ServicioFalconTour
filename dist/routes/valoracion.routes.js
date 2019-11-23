"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var valoracion_controller_1 = require("../controllers/valoracion.controller");
var router = express_1.Router();
router.route('/:id')
    .get(valoracion_controller_1.getValoracion);
router.route('/')
    .post(valoracion_controller_1.postInsertValoracion);
exports.default = router;
