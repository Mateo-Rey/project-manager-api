import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './dbcredentials.js'




export const dbConnect = () => {
    if (!getApps().length) {
        initializeApp({
            credential: cert(credentials)
        })
    }
    return getFirestore();
}