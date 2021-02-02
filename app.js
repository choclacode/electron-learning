const { app } = require('electron');

const main = require('./src');

app.on('ready', main);
