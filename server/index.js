const app = require("express")();

const {
  billTracking,
  healthCheck,
  incomeAndOutGoings,
  spend
} = require('./controllers/')

// connect and seed if necessary
const connectAndSeedDb = require('./utils/connect-and-seed-db')
connectAndSeedDb();

// normally these would be in there own routes
app.get("/health-check", healthCheck);
app.get('/insights/spend-by', spend);
app.get('/insights/income-and-outgoings:category', incomeAndOutGoings);
app.get('/insights/bill-tracking', billTracking);

const errorHandler = (err, req, res, next) => {
  console.log('catch all handler:', err);
  res.status(500)
  res.render('error', { error: err })
}
app.use(errorHandler)


app.listen(5000, () => console.log("The node.js app is listening on port 5000."));
