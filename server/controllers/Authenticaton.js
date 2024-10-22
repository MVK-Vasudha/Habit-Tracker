// Authentication.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving user: ' + err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
