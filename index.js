const express = require('express');

const app = new express();

//Global counter
var i = 0;

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true})); //parse html form data

//ejs Middleware
app.set("view engine", "ejs");
app.set("/public", express.static( __dirname + "/public"));

//routes 
app.get('/', (req, res) => {
    res.render("index")
});

//cant believe im so stupid :(
// app.get('/index', (req, res) => {
//     res.render('../views/index.ejs')
// });

app.get('/my_resume', (req, res) => {
    res.render('../views/my_resume.ejs')
});

app.get('/fun_facts', (req, res) => {
    res.render('../views/fun_facts.ejs')
});

app.get('/trivia', (req, res) => {
    res.render('../views/trivia.ejs')
});

app.post('/idek', (req, res) => {
    
}

app.post('/idek', (req, res) => {
    
    // let ans1 = document.getElementById("a1").value;
    // let ans2 = document.getElementById("a2").value;
    // let ans3 = document.getElementById("a3").value;
    // let ans4 = document.getElementById("a4").value;
    // let ans5 = document.getElementById("a5").value;
    // let ans6 = document.getElementById("a6").value;
    let ans1 = { answer: req.body.a1}
    let ans2 = { answer: req.body.a2}
    let ans3 = { answer: req.body.a3}
    let ans4 = { answer: req.body.a4}
    let ans5 = { answer: req.body.a5}
    let ans6 = { answer: req.body.a6}

    if(ans1 = 3){
        i++;
    }

    if(ans2 = 3){
        i++;
    }

    if(ans3 = 2){
        i++;
    }

    if(ans4 = 1){
        i++;
    }

    if(ans5 = 15){
        i++;
    }

    if(ans6.toLowercase == "yes"){
        i++;
    }

    res.send(`you got ` + i + ` out of 6 questions right. tahnk you for playing`)
});

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> (console.log(`Server started on PORT NO. ${PORT}`)));