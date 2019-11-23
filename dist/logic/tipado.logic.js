"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validaciones_logic_1 = require("./validaciones.logic");
function tipadoServicio(servicios) {
    var newservicios = [];
    for (var i = 0; i < servicios.length; i++) {
        var servicio = validaciones_logic_1.ServicioValidacion(servicios[i]);
        newservicios.push(servicio);
    }
    return newservicios;
}
exports.tipadoServicio = tipadoServicio;
function tipadoTopRanking(topRankings) {
    var newtopranking = [];
    for (var i = 0; i < topRankings.length; i++) {
        var servicio = validaciones_logic_1.topRankingValidacion(topRankings[i]);
        newtopranking.push(servicio);
    }
    return newtopranking;
}
exports.tipadoTopRanking = tipadoTopRanking;
