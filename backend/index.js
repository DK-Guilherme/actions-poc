const express = require('express');
const app = express();
const port = 3000;

// Import the routes
const itemRoutes = require('./users');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the imported routes
app.use('/api', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
