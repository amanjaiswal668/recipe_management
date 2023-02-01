const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userManagementRoute = require('./routes/userManagementRoutes');

app.use(bodyParser.json());
app.use(userManagementRoute);

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`user_management_services listening on port ${port}`);
});

module.exports = app;
