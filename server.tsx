import express, { Request, Response } from 'express';
import { Server } from 'http';

const app = express();
const port = 8080;

// REPLACE WITH YOUR API
app.get("/api", (req: Request, res: Response) => {
    res.send("Let's get it!")
});

// local listener
const server: Server = app.listen(port, () => {
    console.log('Server is listening on port 8080');
});
export default server;

