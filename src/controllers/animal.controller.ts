import { Request, Response } from 'express';
import connection from '../db/connection';

export function getAnimales(req: Request, res: Response) {

    connection.query('SELECT * FROM animal', (err, data) => {
            if(err) throw err;
            res.json(data)
    })  
}

export function getAnimal(req: Request, res: Response){
    const { id } = req.params;
    connection.query ('SELECT * FROM animal WHERE caravana = ?', id,  (err, data) => {
        if(err) throw err;
            res.json(data)
            msg: "ListadoAnimalxID"
        } )  
 }


export function deleteAnimal(req: Request, res: Response){
    const { id } = req.params;
    connection.query('DELETE FROM animal WHERE caravana = ?', id, (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Animal eliminado con exito'
        })
    })
}

export function postAnimal(req: Request, res: Response){
    const {body} = req;
    connection.query('INSERT INTO animal set ?', [body], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Animal agregado con exito'
        })   
    })
}

export function putAnimal(req: Request, res:Response){
    const {body} = req;
    const {id} = req.params;

    connection.query('UPDATE animal set ? WHERE caravana = ? ', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: "Animal actualizado con exito"
        })
    })
}

export function getAnimalesEstacion(req: Request, res: Response) {
    const {id} = req.params;
    connection.query("SELECT a.caravana FROM animal a WHERE a.estacion = ?", id, (err, data) => {
        if(err) throw err;
        res.json(data)
        msg: "Caravanas que pertenecen a la estacion seleccionada"
    })
}

export function getDietasDeAnimales(req: Request, res:Response){
    const {id} = req.params
    connection.query(" SELECT d.* FROM animal a JOIN animal_dieta ad ON a.caravana = ad.cod_animal JOIN dieta d ON ad.cod_dieta = d.cod_dieta WHERE a.caravana = ?", id, (err, data) => {
        if(err) throw err;
        res.json(data)
        msg: "Datos de Dieta de caravana seleccionada"
    })
}

export function asignarDietaAnimal(req: Request, res: Response){
    const {caravana} = req.params;
    const {iddieta} = req.body;
    //Consulta para agregar los datos automaticos a la tabla intermedia
    connection.query('INSERT INTO animal_dieta (cod_animal, cod_dieta) VALUES (?, ?)', [caravana, iddieta], (err,data) => {
        if(err) throw err;
        res.json({
            msg: 'Dieta agregada al Animal'
        })   
    })
}