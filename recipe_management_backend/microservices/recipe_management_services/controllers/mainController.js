const express = require('express');
const app = express();

// Test function.
async function test(req, res) {
    res.json({ message: 'Hello from grocery_list_services' });
}

module.exports = {
    test
}
