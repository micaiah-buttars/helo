require('dotenv').config()
const express = require('express')
const massive = require('massive');
const controller = require('./controller')


const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`listening on ${SERVER_PORT}`)
    })
})

app.post('/auth/register', controller.register)
app.put('/auth/login', controller.login)

app.get('/posts/:userid', controller.getPosts)
app.get('/post/:post_id', controller.getPost)

app.post('/new/:id', controller.post)