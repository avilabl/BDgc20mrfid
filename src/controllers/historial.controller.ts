import { Request, Response } from 'express';
import connection from '../db/connection';

export function getHistoriales(req: Request, res: Response) {

    connection.query('SELECT * FROM historial', (err, data) => {
            if(err) throw err;
            res.json(data)
            msg: "ListadoHistoriales"
    })  
}

export function getHistorialXID(req: Request, res: Response){
    const { id } = req.params;
    connection.query ('SELECT * FROM historial WHERE cod_historial = ?', id,  (err, data) => {
        if(err) throw err;
            res.json(data)
            msg: "ListadoHistorialxID"
        } )  
 }

 export function deleteHistorial(req: Request, res: Response){
    const { id } = req.params;
    connection.query('DELETE FROM historial WHERE cod_historial = ?', id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Historial eliminado con exito'
        })
    })
}

export function postHistorial(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO historial set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Historial agregado con exito'
        })   
    })
}

export function putHistorial(req: Request, res:Response){
    const {body} = req;
    const {id} = req.params;

    connection.query('UPDATE historial set ? WHERE cod_historial = ? ', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "Historial actualizado con exito"
        })
    })
}