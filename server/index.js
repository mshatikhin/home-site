"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var flickr_client_1 = require("./flickr.client");
var isDev = process.env.NODE_ENV === "development";
console.log("**** " + process.env.NODE_ENV + " mode ****");
var app = express();
var PORT = process.env.APP_PORT || 8080;
var IP = process.env.APP_IP || "localhost";
var STATIC_BUILD_DIRECTORY = isDev ? path.join("../build") : "build";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/**
 * API
 */
app.get("/api/albums", flickr_client_1.FlickrClient.getAlbums);
app.get("/api/albums/:photosetId", flickr_client_1.FlickrClient.getPhotoset);
/**
 * STATIC FILES
 */
app.use("/", express.static(path.join(__dirname, STATIC_BUILD_DIRECTORY)));
app.use("/static/*", function (req, res) { });
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, STATIC_BUILD_DIRECTORY, "index.html"));
});
app.listen(PORT);
console.log("Server running at http://%s:%s/", IP, PORT);
exports["default"] = app;
