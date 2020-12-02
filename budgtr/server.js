const express = require('express');
const app = express();
const budget = require('./Models/budget.js');

// MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

app.get("/budget/", (req, res) => {
    res.render("Index", {
    budget: budget})
});

// SHOW
app.get('/budget/:indexOfBudgetArray', (req, res) =>{
    res.render('Show', {
        budget: budget[req.params.indexOfBudgetArray]
    })
});


app.listen(3000);