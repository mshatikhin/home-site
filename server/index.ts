import express = require('express');
import bodyParser = require('body-parser');
import * as path from 'path';
import { FlickrClient } from './flickr.client';

const isDev = process.env.NODE_ENV === 'development';
console.log(`**** ${process.env.NODE_ENV} mode ****`);

const app = express();

const PORT = process.env.APP_PORT || 8080;
const IP = process.env.APP_IP || 'localhost';
const STATIC_BUILD_DIRECTORY = isDev ? path.join('../build') : 'build';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * API
 */
app.get('/api/albums', FlickrClient.getAlbums);
app.get('/api/albums/:photosetId', FlickrClient.getPhotoset);

/**
 * STATIC FILES
 */
app.use('/', express.static(path.join(__dirname, STATIC_BUILD_DIRECTORY)));

app.get('*', function(req: any, res: any) {
  res.sendFile(path.join(__dirname, STATIC_BUILD_DIRECTORY, 'index.html'));
});

app.listen(PORT);

console.log('Server running at http://%s:%s/', IP, PORT);

export default app;
