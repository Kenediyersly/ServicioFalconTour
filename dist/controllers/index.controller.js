"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seguridad_1 = require("../lib/seguridad");
function indexBienvenida(req, res) {
    var serv = "69.64.87.104\\,DMD_PEDIDOS,sa,amadeus2010";
    var sev = seguridad_1.encriptar(serv);
    console.log(sev);
    console.log(seguridad_1.desencriptar(sev));
    return res.json('Welcome to my API');
}
exports.indexBienvenida = indexBienvenida;
