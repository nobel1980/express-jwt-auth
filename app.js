const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

app.use(express.json());

// Set up routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/user', userRoutes); // User-related routes


app.get("/", function(req, res) {
    // Add any desired functionality for the homepage
    res.send("JWT auth Express API Homepage");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
