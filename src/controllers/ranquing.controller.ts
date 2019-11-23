import {Request, Response} from 'express';

import { connect } from '../database/database';
import { Ranking } from '../interface/ranking.interface';
import { TopRanking } from '../interface/toprankking.interface';
import { tipadoTopRanking } from '../logic/tipado.logic';

export async function getRanquing(req: Request, res: Response): Promise<Response>{
    try{
        const idservicio = req.params.id;
        const conn = await connect();
        const result = await conn.query(`exec valorranquinng ${idservicio}`);
        conn.close();
        return res.json(result.recordset[0]);
    }catch(err){
        throw(err);
    }
}

export async function getTopRanquing(req: Request, res: Response): Promise<Response>{
    try{
        const idcategoria = req.params.id;
        const conn = await connect();
        const result = await conn.query(`exec listarRankingTop6 ${idcategoria}`);
        conn.close();
        const response: Array<TopRanking> = result.recordset;
        if(response.length > 0){
            return res.json({size:response.length  ,objeto: tipadoTopRanking(response)});
        }else{
            return res.json({size:response.length  ,objeto: [{titulo: "Notificación", mensaje: `No se enontro ningun servicio en su categoria del ranking.`}]});
        }
    }catch(err){
        throw(err);
    }
}

export async function postInsertRanking(req: Request, res: Response){
    try{
        const { ranking } =  req.body;
        const r: Ranking = ranking;
        if(r.aprovacion == '0' || r.aprovacion == '1'){
            const conn = await connect();
            const result = await conn.query(`exec movil_insertRanking '${r.aprovacion}', '${r.idservicio}', '${r.idusuario}'`);
            conn.close();
            const response = result.recordset[0].response;
            if(response == "OK"){
                return res.json({size: 0 , objeto:[{titulo: "Exito", mensaje: "Ranking confirmado"}]})
            }else{
                return res.json({size: 0 , objeto:[{titulo: "Alerta", mensaje: "Fallo subiendo la valoracion de apresiacion"}]})
            }
        }else{
            return res.json({size: 0 , objeto:[{titulo: "Alerta", mensaje: "Falla al subir la aprovación, por motivos de indices"}]})
        }
    }catch(err){
        throw(err);
    }
}