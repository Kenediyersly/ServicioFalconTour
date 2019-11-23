"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function usuarioValidacion(usuario) {
    return {
        "nombre": usuario.nombre,
        "apellidos": usuario.apellidos,
        "correo": usuario.correo,
        "foto": usuario.foto
    };
}
exports.usuarioValidacion = usuarioValidacion;
function ServicioValidacion(servicio) {
    return {
        "codigo": servicio.codigo.toString(),
        "nombre": servicio.nombre,
        "direccion": servicio.direccion,
        "latitud": servicio.latitud,
        "longitud": servicio.longitud,
        "telefono": servicio.telefono,
        "horario": servicio.horario,
        "descripcion": servicio.descripcion,
        "estrellas": servicio.estrellas,
        "idcategoriaservicio": servicio.idcategoriaservicio,
        "imagen": servicio.imagen
    };
}
exports.ServicioValidacion = ServicioValidacion;
function topRankingValidacion(topRanking) {
    return {
        "idservicio": topRanking.idservicio,
        "nombre": topRanking.nombre,
        "ranking": topRanking.ranking
    };
}
exports.topRankingValidacion = topRankingValidacion;
