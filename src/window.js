const { BrowserWindow } = require('electron');

const mainWindow = () => {
  const win = new BrowserWindow({
    icon: './assets/avatar.png', 
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('./public/index.html');
}

module.exports = mainWindow;
