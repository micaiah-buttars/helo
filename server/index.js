require('dotenv').config()
const express = require('express')
const massive = require('massive');
const controller = require('./controller')
const session = require('express-session')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`listening on ${SERVER_PORT}`)
    })
})

app.post('/auth/register', controller.register)
app.put('/auth/login', controller.login)
app.get('/auth/me', controller.getUser)
app.post('/auth/logout', controller.logout)

app.get('/posts', controller.getPosts)
app.get('/post/:post_id', controller.getPost)

app.post('/new', controller.post)
