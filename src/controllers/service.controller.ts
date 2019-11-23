import {Request, Response} from 'express';

import {connect} from '../database/database';
import { tipadoServicio } from '../logic/tipado.logic';
import { Servicio } from "../interface/servicio.interface";

export async function getServicios(req: Request, res: Response): Promise<Response>{
    try{
        const busqueda = req.params.b;
        const conn = await connect();
        const result = await conn.query(`exec movil_allservice '${busqueda}'`);
        conn.close();
        const response: Array<Servicio> = result.recordset;
        if(response.length > 0){
            return res.json({size:response.length  ,objeto: tipadoServicio(response)});
        }else{
            return res.json({size:response.length  ,objeto: [{titulo: "Notificación", mensaje: `No se enontro ningun servicio con estas especificaciones ${busqueda}`}]});
        }
    }catch(err){
        throw(err);
    }
}
