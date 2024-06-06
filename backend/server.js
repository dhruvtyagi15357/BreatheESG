import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';

const app = express();
const server = http.createServer(app);

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
server.listen(PORT, async () => {
    // await connect()
    console.log(`server listening on the port: ${PORT}`);
});