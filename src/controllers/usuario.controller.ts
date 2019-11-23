import {Request, Response} from 'express';

import { connect } from '../database/database';
import { Usuario } from '../interface/usuario.interface';
import { usuarioValidacion} from '../logic/validaciones.logic';
import { Persona } from '../interface/persona.interface';

export async function getUsuario(req: Request, res: Response): Promise<Response>{
    try{
        const user = req.params.u;
        const password = req.params.p;
        const conn = await connect();
        const result = await conn.query(`exec movil_getUser '${user}'`);
        conn.close();
        const response: Array<Persona> = result.recordsets[1];
        if(response.length > 0){
            const usuario: Persona = response[0];
            const newusuario: Persona = usuarioValidacion(usuario);
            let resp = result.recordsets[0][0].contrasenia;
            if(resp == password){
                return res.json({size: response.length , objeto:[newusuario]});
            }else{
                return res.json({size: 0 , objeto:[{titulo: "Alerta", mensaje: "La contraseña ingresada es incorrecta"}]})
            }
        }else{
            return res.json({size: response.length , objeto:[{titulo: "Alerta", mensaje: "El usuario ingresado no existe"}]})
        }
    }catch(err){
        throw(err);
    }
}


export async function postInsertUserAndPerson(req: Request, res: Response){
    try{
        const { persona, usuario } =  req.body;
        const p: Persona = persona;
        const u: Usuario = usuario;
        const conn = await connect();
        const result = await conn.query(`exec movil_newpersonanduser '${p.nombre}', '${p.apellidos}', '${p.correo}', '${p.foto}', '${u.usuario}', '${u.contrasenia}', '${u.idtipousuario}'`);
        conn.close();
        const response = result.recordset[0].response;
        if(response == "NP"){
            return res.json({size: 0 , objeto:[{titulo: "Alerta", mensaje: "Ya existe un turista con el mismo nombre"}]})
        }else if(response == "NU"){
            return res.json({size: 0 , objeto:[{titulo: "Alerta", mensaje: "Ya hay un turista con el mismo usuario"}]})
        }else if(response == "OK"){
            return res.json({size: 1 , objeto:[{titulo: "Exito", mensaje: "Los datos del turista han sido registrados correctamente"}]})
        }
    }catch(err){
        throw(err);
    }
}