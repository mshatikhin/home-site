const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/test', function (req, res) {
    res.status(200).json({
        message: 'test'
    });
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.APP_PORT);
console.log('Server running at http://%s:%s/', process.env.APP_IP, process.env.APP_PORT);