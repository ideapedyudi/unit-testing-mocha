const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Joi = require('joi');

const app = express()
const url = 'mongodb://127.0.0.1:27017/test_api?authSource=admin&readPreference=primary&directConnection=true&ssl=false'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

const mySchema = new mongoose.Schema({
    name: String,
    age: Number
})
const MyModel = mongoose.model('users', mySchema)

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json("connected")
})

app.get('/data', (req, res) => {
    MyModel.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const newData = new MyModel({
        name: req.body.name,
        age: req.body.age
    });
    newData.save()
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.put('/edit/:id', (req, res) => {
    MyModel.findById(req.params.id)
        .then(data => {
            data.name = req.body.name
            data.age = req.body.age
            data.save()
                .then(updatedData => res.json(updatedData))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    MyModel.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})

module.exports = app;