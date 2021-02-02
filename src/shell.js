const { shell } = require('electron');

const openHome = () => shell.openExternal('http://choclacode.eu.org');
const openAbout = () => shell.openExternal('http://choclacode.eu.org/about');

module.exports = { openHome, openAbout };
