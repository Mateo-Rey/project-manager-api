import express from 'express';
import functions from 'firebase-functions'
import cors from 'cors';


const app = express(cors())

app.listen(4000, () => {console.log('port 4000')})

export const api = functions.https.onRequest(app)