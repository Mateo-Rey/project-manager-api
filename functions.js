import {dbConnect} from './dbConnect.js'
const db = dbConnect()
function handleError(err, res) {
    console.error(err);
    res.status(500).send(err);
}

export const getProjects = (req, res) => {
    req.params
    db.collection('projects')
        .get()
        .then((collection) => {
            const projects = collection.docs.map((doc) => doc.data())
            res.send(projects)
        })
        .catch((err) => handleError(err,res))

}

export const addProject = (req, res) => {
    const newProject = req.body
    newProject.creationDate = new Date()
    db.collection('projects')
        .add(newProject)
        .then((doc) => {
            res.status(201).send({
              success: true,
              id: doc.id,
            });
          })
          .catch((err) => handleError(err, res));

}

export const updateProject = async (req, res) => {
    const {userId} = req.params.userId
    const {projectId} = req.params.projectId
    const update = req.body
    const docRef = db.collection('projects').doc(`ftQ7zK7Kl2sRWYUaO3rp`).set(update, {merge: true})

        await docRef
            .then(res.status(200).send('Project Updated'))
            .catch((err)=> {console.log(err)})
        
    
}