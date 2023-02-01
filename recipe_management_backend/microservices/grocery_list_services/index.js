const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const groceryRoute = require('./routes/GroceryRoutes');

app.use(bodyParser.json());
app.use(groceryRoute);

const port = process.env.PORT || 8002;

app.listen(port, () => {
    console.log(`grocery_list_services listening on port ${port}`);
});

module.exports = app;
