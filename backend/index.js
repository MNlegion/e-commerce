const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(cors());
app.use(express.json());

// MondoDB connection

mongoose.connect('mongodb://localhost/e_commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
// ...
app.get('/', (req, res) => {
    res.send('Hello, this is your Express.js server!');
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});