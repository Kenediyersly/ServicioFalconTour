"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var usuario_controller_1 = require("../controllers/usuario.controller");
router.route('/:u&p=:p')
    .get(usuario_controller_1.getUsuario);
router.route('/')
    .post(usuario_controller_1.postInsertUserAndPerson);
exports.default = router;
