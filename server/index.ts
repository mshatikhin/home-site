import fetch from 'cross-fetch';
const express = require('express');
const path = require('path');
const app = express();

const FLICKR_USER_ID = '124274905@N03';
const FLICKR_API_KEY = '1173960c94df6700f0b57dccc50f0925';

const PORT = process.env.APP_PORT || 8080;
const IP = process.env.APP_IP || '127.0.0.1';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/albums', async function(req: any, res: any) {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&primary_photo_extras=url_z&format=json&nojsoncallback=1`
    );
    const resp = await response.json();
    return res.status(200).json(resp);
  } catch (e) {
    return res.status(404).json({ error: e });
  }
});

app.get('/api/test', async function(req: any, res: any) {
  return res.status(200).json({ message: 'test' });
});

app.get('/', function(req: any, res: any) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
console.log('Server running at http://%s:%s/', IP, PORT);
