const { Menu } = require('electron');
const { openHome, openAbout } = require('./shell');

const menu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'View',
      submenu: [
        { role: 'copy' },
        { role: 'cut' },
        { role: 'selectAll' },
        { role: 'delete' },

        { type: 'separator' },

        { role: 'undo' },
        { role: 'redo' },

        { type: 'separator' },

        { role: 'toggleDevTools' },
        { role: 'togglefullscreen' },
        { role: 'viewMenu' },

        { type: 'separator' },

        { role: 'close' }
      ]
    },
    { type: 'separator' },
    {
      label: 'Help',
      submenu: [
        { label: 'About', click: openAbout },
        { label: 'Acknowledgements', click: openHome }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}

module.exports = menu;
