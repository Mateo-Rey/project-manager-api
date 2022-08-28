import {dbConnect} from './dbConnect.js'
const db = dbConnect()
function handleError(err, res) {
    console.error(err);
    res.status(500).send(err);
}

export const getProjects = (req, res) => {
    db.collection('projects')
        .get()
        .then((collection) => {
            const projects = collection.docs.map((doc) => doc.data())
            res.send(projects)
        })
        .catch((err) => handleError(err,res))

}