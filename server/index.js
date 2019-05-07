require('dotenv').config()
const express = require('express'),
    bodyParser = require('body-parser'),
    sessions = require('express-session'),
    massive = require('massive')
    ctrl = require('./controller')

    const app = express()
    const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

// app.use(express.static(`${__dirname}/../build`))


app.use(bodyParser.json())
    massive(CONNECTION_STRING).then(db=>{
        app.set('db', db)
        console.log('connected to db')
    })


app.use(sessions({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 100000000}
}))

app.get('/firstName', ctrl.getFirstName)

app.get('/lastName', ctrl.getLastName)

app.get('/descriptor', ctrl.getDescriptor)

app.get('/class', ctrl.getClass)

app.get('/all_names', ctrl.getNames)



app.listen(SERVER_PORT, () => console.log(`Working on port ${SERVER_PORT}`))