import { Request, Response } from 'express';
import connection from '../db/connection';

export function getControladoresDuenio(req: Request, res: Response) {
    const { id } = req.params;
    connection.query("SELECT c.nro_serie FROM controlador c WHERE c.usuario = ?", id, (err, data) => {    
        if(err) throw err;
            res.json(data)
            msg: "Usuario al que pertenece el controlador"
    } )  
}

export function postControlador(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO controlador set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Controlador agregado con exito'
        })   
    })
}

export function putControlador(req: Request, res:Response){
    const {body} = req;
    const {id} = req.params;

    connection.query('UPDATE controlador set ? WHERE nro_serie = ? ', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "Controlador actualizado con exito"
        })
    })
}

export function getControladores(req: Request, res: Response) {

    connection.query('SELECT * FROM controlador', (err, data) => {
            if(err) throw err;
            res.json(data)
            msg: "ListadoControladores"
    })  
}