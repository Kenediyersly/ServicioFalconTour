import {Request, Response} from 'express';

import { connect } from '../database/database';
import { Valoracion } from '../interface/valoracion.interface';

export async function getValoracion(req: Request, res: Response): Promise<Response>{
    try{
        const idservicio = req.params.id;
        const conn = await connect();
        const result = await conn.query(`exec porcentajevaloracion ${idservicio}`);
        conn.close();
        return res.json(result.recordset[0]);
    }catch(err){
        throw(err);
    }
}


export async function postInsertValoracion(req: Request, res: Response){
    try{
        const { valoracion } =  req.body;
        const v: Valoracion = valoracion;
        const conn = await connect();
        const result = await conn.query(`exec movil_insertValoracion '${v.valor}', '${v.idservicio}', '${v.idusuario}'`);
        conn.close();
        const response = result.recordset[0].response;
        if(response == "OK"){
            return res.json({size: 0 , objeto:[{titulo: "Exito", mensaje: "Valoracion confirmada"}]})
        }else{
            return res.json({size: 0 , objeto:[{titulo: "Alerta", mensaje: "Fallo subiendo la valoracion"}]})
        }
    }catch(err){
        throw(err);
    }
}