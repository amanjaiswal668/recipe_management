const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const recipeManagementRoute = require('./routes/recipeManagementRoutes');

app.use(bodyParser.json());
app.use(recipeManagementRoute);

const port = process.env.PORT || 8003;

app.listen(port, () => {
    console.log(`recipe_management_services listening on port ${port}`);
});

module.exports = app;
