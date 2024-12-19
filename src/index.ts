import Server from "./models/server";
import dontenv from 'dotenv';

dontenv.config();

const server = new Server();

server.listen();
server.routes();

