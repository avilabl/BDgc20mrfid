
import mysql2 from 'mysql2';
import database from '../keys';

const connection = mysql2.createConnection(database);

export default connection;
