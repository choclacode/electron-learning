const mainWindow = require('./window');
const menu = require('./menu');
const tray = require('./tray');

const main = () => {
  mainWindow();
  menu();
  tray();
}

module.exports = main;
