const { render } = require('ejs');
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
    
    // let ans1 = document.getElementById("a1").value;
    // let ans2 = document.getElementById("a2").value;
    // let ans3 = document.getElementById("a3").value;
    // let ans4 = document.getElementById("a4").value;
    // let ans5 = document.getElementById("a5").value;
    // let ans6 = document.getElementById("a6").value;
    let ans1 = req.body.a1
    let ans2 = req.body.a2
    let ans3 = req.body.a3
    let ans4 = req.body.a4
    let ans5 = req.body.a5

    if(ans1 == "3" || ans1 == "c") {
        i++;
        console.log("right" + i)
        console.log(ans1)
    }else {
        console.log("wrong")
        console.log(ans1)
    }

    if(ans2 == "3" || ans2 == "b"){
        i++;
        console.log("right")
        console.log(ans2)
    }else{
        console.log("wrong")
        console.log(ans2)
    };

    if(ans3 == "2" || ans3 == "c"){
        i++;
        console.log("right")
        console.log(ans3)
    }else{
        console.log("wrong")
        console.log(ans3)
    };

    if(ans4 == "1" || ans4 == "a"){
        i++;
        console.log("right")
        console.log(ans4)
    }else{
        console.log("wrong")
        console.log(ans4)
    };

    if(ans5 == "15" || ans5 == "b"){
        i++;
        console.log("right")
        console.log(ans5)
    }else{
        console.log("wrong")
        console.log(ans5)
    };

    res.send(`you got ` + i + ` out of 5 questions right. tahnk you for playing`)
});

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> (console.log(`Server started on PORT NO. ${PORT}`)));