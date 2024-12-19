import { Request, Response } from 'express';
import connection from '../db/connection';

export function getUsuarios(req: Request, res: Response) {
    connection.query('SELECT * FROM usuario', (err, data) => {
            if(err) throw err;
            res.json(data)
            msg: "ListadoUsuarios"
    })  
}


export function getUsuario(req: Request, res: Response){
    const { id } = req.params;
    connection.query ('SELECT * FROM usuario WHERE idusuario = ?', id,  (err, data) => {
        if(err) throw err;
            res.json(data)
            msg: "ListadoUsuarioxID"
        } )  
 }



export function deleteUsuario(req: Request, res: Response){
    const { id } = req.params;
    connection.query('DELETE FROM usuario WHERE idusuario = ?', id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Usuario eliminado con exito'
        })
    })
}

export function postUsuario(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO usuario set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Usuario agregado con exito'
        })   
    })
}

export function putUsuario(req: Request, res:Response){
    const {body} = req;
    const {id} = req.params;

    connection.query('UPDATE usuario set ? WHERE idusuario = ? ', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "Usuario actualizado con exito"
        })
    })
}