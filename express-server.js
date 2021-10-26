const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

custom_data = {
    '123':{
        name:"Grey suit",
        price:"89.99",
        sizes:['S','M','L',"XL"],
        img_link:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

    },
}

app.get('/api', (req, res)=>{
    console.log(req.query.id);
    res.json(custom_data[req.query.id])



});

app.listen(8081);