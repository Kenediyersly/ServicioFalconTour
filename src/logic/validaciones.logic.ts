
import { Persona } from "../interface/persona.interface";
import { Servicio } from "../interface/servicio.interface";
import { TopRanking } from "../interface/toprankking.interface";

export function usuarioValidacion(usuario : Persona){
    return {
        "nombre" : usuario.nombre,
        "apellidos" : usuario.apellidos,
        "correo" : usuario.correo,
        "foto" : usuario.foto
    };
}

export function ServicioValidacion(servicio : Servicio){
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

export function topRankingValidacion(topRanking: TopRanking){
    return {
        "idservicio": topRanking.idservicio,
        "nombre": topRanking.nombre,
        "ranking": topRanking.ranking
    };
}