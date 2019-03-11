const express  = require('express');
const mqtt = require('mqtt');
const app = express();

let degrees = 0

var mqttClient = mqtt.connect('http://broker.hivemq.com');

app.get('/', (req,res) => {
    res.send('Hello');
    console.log('Got request from' + req.ip);
})

app.get('/temp/:degrees', (req,res) => {
    res.send(req.params);
    degrees = req.params.degrees;
    console.log('Set temp to '+ degrees);
});

app.get('/topic/:topic/value/:topicValue', (req,res) => {
    let topic = req.params.topic;
    let value = req.params.topicValue;

    res.send(req.params);
    mqttClient.publish(topic, value)
    console.log('topic/value :'+ topic+'/'+value);
});

app.get('/temp', (req,res) => {
    res.send('Current temperature is '+ degrees);
    console.log('Current temperature is '+ degrees);
});

app.listen(3000, () => console.log('Server is running'));