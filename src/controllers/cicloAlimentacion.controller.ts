import { Request, Response } from 'express';
import connection from '../db/connection';

export function getCiclos(req: Request, res: Response) {

    connection.query('SELECT * FROM ciclo_alimentacion', (err, data) => {
            if(err) throw err;
            res.json(data)
    })  
}
export function getCicloxID(req: Request, res: Response){
    const { id } = req.params;
    connection.query ('SELECT * FROM ciclo_alimentacion WHERE codciclo_alimentacion = ?', id,  (err, data) => {
        if(err) throw err;
            res.json(data)
            msg: "ListadoCiclosxID"
        } )  
 }
export function postCiclos(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO ciclo_alimentacion set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Ciclo agregado con exito'
        })   
    })
}
export function deleteCiclo(req: Request, res: Response){
    const { id } = req.params;
    connection.query('DELETE FROM ciclo_alimentacion WHERE codciclo_alimentacion = ?', id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Ciclo eliminado con exito'
        })
    })
}

export function putCiclo(req: Request, res:Response){
    const {body} = req;
    const {id} = req.params;

    connection.query('UPDATE ciclo_alimentacion set ? WHERE codciclo_alimentacion = ? ', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "Ciclo actualizado con exito"
        })
    })
}
export function getCiclosdeEstacion(req: Request, res: Response){
    const { idestacion } = req.params;
    connection.query ("SELECT ca.fechaIni FROM ciclo_alimentacion ca WHERE ca.estacion = ?", idestacion,  (err, data) => {
        if(err) throw err;
            res.json(data)
            msg: "Fecha inicio del ciclo de la estacion"
        } )  
 }