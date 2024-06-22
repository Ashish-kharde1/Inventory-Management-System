const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const moment = require('moment');

const app = express();
const PORT = 3000;

const users = {
    admin: '1',
    user: '2'
};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Serve login page for admin and user pages without proper authentication
app.get(['/', '/admin.html', '/user.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Serve admin page with authentication check
app.get('/admin', (req, res) => {
    const password = req.query.password;
    if (password === '1') {
        res.sendFile(path.join(__dirname, 'admin.html'));
    } else {
        res.send('Invalid password. Access denied.');
    }
});

// Serve user page with authentication check
app.get('/user', (req, res) => {
    const password = req.query.password;
    if (password === '2') {
        res.sendFile(path.join(__dirname, 'user.html'));
    } else {
        res.send('Invalid password. Access denied.');
    }
});

// Handle login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        const redirectUrl = username === 'admin' ? '/admin.html' : '/user.html';
        res.json({ status: 'success', redirectUrl });
    } else {
        res.json({ status: 'error' });
    }
});

// Save data to CSV
app.post('/save', (req, res) => {
    const { "product name": productName, "user name": userName, quantity, "customer name": customerName, "date and time": dateTime, price } = req.body;

    // Format the date and time to ISO format
    const formattedDateTime = moment(dateTime).format('YYYY-MM-DD & HH:mm:ss');

    const csvLine = `"${productName}","${userName}","${quantity}","${customerName}","${formattedDateTime}","${price}"\n`;
    const filePath = path.join(__dirname, 'data', 'oil_data.csv');

    fs.appendFile(filePath, csvLine, (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).json({ status: 'error', message: 'Error saving data' });
        } else {
            res.status(200).json({ status: 'success', message: 'Data saved successfully' });
        }
    });
});

// Fetch data from CSV
app.get('/fetch-data', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'oil_data.csv');
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv(['product name', 'user name', 'quantity', 'customer name', 'date and time', 'price']))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        })
        .on('error', (err) => {
            console.error('Error reading data:', err);
            res.status(500).json({ status: 'error', message: 'Error reading data' });
        });
});

// Serve admin.html directly
app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Serve view-data.html directly
app.get('/view-data.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'view-data.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
