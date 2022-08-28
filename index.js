import express from 'express';
import functions from 'firebase-functions'
import cors from 'cors';
import { addProject, getProjects } from './functions.js';

const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000, () => {console.log('port 4000')})


app.get('/projects/:id', getProjects)
app.post('/add-project/:id', addProject)
export const api = functions.https.onRequest(app)