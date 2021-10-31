const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const morgan = require('morgan');


const authRouter = require('./routes/routes')

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

users = [
    { username: 'hema', email: 'h@h.com', password: 'test' },
    { username: 'evan', email: 'e@e.com', password: 'test' },
]

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use('/api/auth/', authRouter);

app.get('/api', (req, res) => {
    console.log(req.query.id);
    res.json(custom_data[req.query.id])
});

app.post('/api/auth/login', (req, res) => {
    if (users.find(user => user.email === req.body.email && user.password === req.body.password)) {
        res.send('successfully logged in')
    }
    else {
        console.log(req)
        res.sendStatus(500)
    }
})

app.get('/api/auth/user', (req, res) => {
    res.json({ username: 'hema', password: 'test', 'email': 'h@h.com' })
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

mongoose
  .connect('mongodb://localhost:27017/f_lancers?readPreference=primary&appname=MongoDB%20Compass&ssl=false')
  .then((result) => {
    app.listen(process.env.PORT || 8081);
  })
  .catch((err) => console.log(err));
//mongodb://localhost:27017/f_lancers/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
// app.listen(8081);