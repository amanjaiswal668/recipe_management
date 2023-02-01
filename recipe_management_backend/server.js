const express = require('express');
const cors = require('cors');
const service1 = require('./microservices/user_management_services/index');
const service2 = require('./microservices/grocery_list_services/index');
const service3 = require('./microservices/recipe_management_services/index');

const app = express();

app.use(cors());
app.use('/service1/api/v1', service1);
app.use('/service2/api/v1', service2);
app.use('/service3/api/v1', service3);

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
        },
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Microservices main server started on port ${port}`);
});
