import express from 'express';
const app = express();

const PORT = 3000;

app.get('/exercises', (req, res) => {
    let filter = {};
    
    if(req.query.date !== undefined){
        filter = { year: req.query.date };
    }
    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});