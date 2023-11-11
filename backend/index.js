const express = require('express');
const mongooes = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});