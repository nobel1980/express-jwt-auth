const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (results.length > 0) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword],
            (err, results) => {
                if (err) return res.status(500).json({ message: 'Server error' });
                res.status(201).json({ message: 'User registered successfully!' });
            }
        );
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (results.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};
