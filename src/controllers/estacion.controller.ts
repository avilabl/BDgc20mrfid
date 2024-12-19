import { Request, Response } from 'express';
import connection from '../db/connection';

export function getEstacionesDuenio(req: Request, res: Response) {
    const { id } = req.params;
    connection.query("SELECT e.cod_estacion FROM estacion e WHERE e.usuario = ?", id, (err, data) => {    
        if(err) throw err;
            res.json(data)
            msg: "Usuario al que pertenece la estacion"
    } )  
}

export function postEstacion(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO estacion set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Estacion agregada con exito'
        })   
    })
}
export function getEstaciones(req: Request, res: Response) {

    connection.query('SELECT * FROM estacion', (err, data) => {
            if(err) throw err;
            res.json(data)
            msg: "ListadoEstaciones"
    })  
}
