"use strict";
const express = require('express');
require('dotenv').config();
// application
const app = require('./app');
// base de donnes
const db = require('./database');
// listening port
const PORT = process.env.PORT || 8080;
module.exports = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// const app: Express = express();
// const port = process.env.PORT;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });
// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });
