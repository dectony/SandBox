const express  = require('express');
const app = express();

let degrees = 0

app.get('/', (req,res) => {
    res.send('Hello');
    console.log('Got request from' + req.ip);
})

app.get('/temp/:degrees', (req,res) => {
    res.send(req.params);
    degrees = req.params.degrees;
    console.log('Set temp to '+ degrees);
});

app.get('/temp', (req,res) => {
    res.send('Current temperature is '+ degrees);
    console.log('Current temperature is '+ degrees);
});

app.listen(3000, () => console.log('Server is running'));