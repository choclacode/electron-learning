const { Menu, Tray } = require('electron');
const { openHome, openAbout } = require('./shell');

const tray = () => {
  const tray = new Tray('./assets/avatar.png');
  const menu = Menu.buildFromTemplate([
    { label: 'Choclacode', click: openHome },
    { type: 'separator' },
    { label: 'About', click: openAbout },
    { role: 'quit' }
  ]);

  tray.setContextMenu(menu);
  tray.setToolTip('Choclacode');
}

module.exports = tray;
