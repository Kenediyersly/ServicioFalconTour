
import { ServicioValidacion, topRankingValidacion } from "./validaciones.logic";
import { Servicio } from "../interface/servicio.interface";
import { TopRanking } from "../interface/toprankking.interface";


export function tipadoServicio (servicios: Array<Servicio>){
    const newservicios : Array<Servicio> = [];
    for(let i = 0; i<servicios.length; i++){
        const servicio : Servicio  = ServicioValidacion(servicios[i]);
        newservicios.push(servicio);
    }
    return newservicios;
}

export function tipadoTopRanking (topRankings: Array<TopRanking>){
    const newtopranking : Array<TopRanking> = [];
    for(let i = 0; i<topRankings.length; i++){
        const servicio : TopRanking  = topRankingValidacion(topRankings[i]);
        newtopranking.push(servicio);
    }
    return newtopranking;
}