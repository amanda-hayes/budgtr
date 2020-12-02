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
        budget: budget,
        bankAccount: checkBalance()
    })
});

function checkBalance() {
    return parseInt(budget.reduce((currentTotal, budget) => {
        return (budget.amount + currentTotal)
    }, 0));
}
      

// NEW
app.get("/budget/new", (req, res) => {
    res.render('New');
})

// POST
app.post("/budget", (req, res) => {
    res.send(req.body);
    budget.push(req.body);
    res.redirect("/budget");
})

// BANK ACCOUNT


// SHOW
app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render('Show', {
        budget: budget[req.params.indexOfBudgetArray]
    })
});


app.listen(3000);