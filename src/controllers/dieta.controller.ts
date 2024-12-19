import { Request, Response } from 'express';
import connection from '../db/connection';

export function getDietas(req: Request, res: Response) {

    connection.query('SELECT * FROM dieta', (err, data) => {
            if(err) throw err;
            res.json(data)
            msg: "ListadoDietas"
    })  
}

export function getDietasxID(req: Request, res: Response){
    const { cod } = req.params;
    connection.query ('SELECT * FROM dieta WHERE cod_dieta = ?', cod,  (err, data) => {
        if(err) throw err;
            res.json(data)
            msg: "ListadoDietaxID"
        } )  
 }


export function deleteDieta(req: Request, res: Response){
    const { cod } = req.params;
    connection.query('DELETE FROM dieta WHERE cod_dieta = ?', cod, (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Dieta eliminada con exito'
        })
    })
}

export function postDieta(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO dieta set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Dieta agregada con exito'
        })   
    })
}

export function putDieta(req: Request, res:Response){
    const {body} = req;
    const {cod} = req.params;

    connection.query('UPDATE dieta set ? WHERE cod_dieta = ? ', [body, cod], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "Dieta actualizada con exito"
        })
    })
}
