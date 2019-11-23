import {Request, Response} from 'express';
import { encriptar, desencriptar } from '../lib/seguridad';

export function indexBienvenida (req: Request , res: Response){
    const serv = `69.64.87.104\\,DMD_PEDIDOS,sa,amadeus2010`;
    const sev = encriptar(serv);
    console.log(sev);
    console.log(desencriptar(sev));
    return res.json('Welcome to my API');
}