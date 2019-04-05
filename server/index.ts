import fetch from 'cross-fetch';
import express = require('express');
import bodyParser = require('body-parser');
import * as path from 'path';

const app = express();

const FLICKR_USER_ID = '124274905@N03';
const FLICKR_API_KEY = '1173960c94df6700f0b57dccc50f0925';

const PORT = process.env.APP_PORT || 8080;
const IP = process.env.APP_IP || '127.0.0.1';
const STATIC_BUILD_DIRECTORY = 'build';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * API
 */

const getFlickrUrl = ({ method, params }: { method: string; params: string }) => {
  return `https://api.flickr.com/services/rest/?method=${method}&api_key=${FLICKR_API_KEY}&user_id=${FLICKR_USER_ID}&${params}&format=json&nojsoncallback=1`;
};

app.get('/api/albums', async function(req, res) {
  try {
    const url = getFlickrUrl({ method: 'flickr.photosets.getList', params: '&primary_photo_extras=url_z' });
    const response = await fetch(url);
    const resp = await response.json();
    res.status(200).send(resp);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

app.get('/api/albums/:photosetId', async function(req, res) {
  try {
    const url = getFlickrUrl({ method: 'flickr.photosets.getPhotos', params: `&photoset_id=${req.params.photosetId}` });
    const response = await fetch(url);
    const resp = await response.json();
    res.status(200).send(resp);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

app.get('/api/test', async function(req: any, res: any) {
  res.status(200).json({ message: 'test' });
});

/**
 * STATIC FILES
 */

app.use('/', express.static(path.join(__dirname, STATIC_BUILD_DIRECTORY)));

app.get('*', function(req: any, res: any) {
  res.sendFile(path.join(__dirname, STATIC_BUILD_DIRECTORY, 'index.html'));
});

app.listen(PORT);

console.log('Server running at http://%s:%s/', IP, PORT);

module.exports = app;
