const express = require('express')
const path = require("path")
const ejs = require('ejs')

const app = express();

function base(req, res) {
    res.render('base')
}

function kontakt(req, res) {
    const parameters = {}; 
    res.render("kontakt", parameters)
}

function news(req, res) {
    res.render("news", {data: data})
}


const data1 = {
    title: 'Test1',
    imageUrl: '/static/assets/Butterfly.png',
    description: 'This is a short description',
    buttonUrl: 'Placeholder'
  };

const data2 = {
    title: 'Test2',
    imageUrl: '/static/assets/Butterfly2.png',
    description: 'This is a short description',
    buttonUrl: 'Placeholder'
  };



const data = [
    data1,
    data2,
    {
        title: 'Test3',
        imageUrl: '/static/assets/Hiker.png',
        description: 'This is a short description',
        buttonUrl: 'Placeholder',
    }
]


app.get('/base', base)
app.get('/kontakt', kontakt);
app.get('/news', news)

app.use('/static', express.static("public"))
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000)