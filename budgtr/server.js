const express = require('express');
const app = express();
const budget = require('./Models/budget.js');
const bankAccount = 

// MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.get("/budget/", (req, res) => {
    res.render("Index", {
    budget: budget})
});

// NEW
app.get('/budget/new', (req, res) => {
    res.render('New');
})

// POST
app.post("/budget", (req, res) => {
    res.send(req.body);
    budget.push(req.body);
    res.redirect("/budget");
})

// BANK ACCOUNT
// const sum = budget.reduce(function (a, b) {
//     return a + b
//   }, 0)
// sum(budget);

// SHOW
app.get('/budget/:indexOfBudgetArray', (req, res) =>{
    res.render('Show', {
        budget: budget[req.params.indexOfBudgetArray]
    })
});


app.listen(3000);