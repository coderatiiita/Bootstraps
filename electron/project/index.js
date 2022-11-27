const { app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    titleBarStyle: 'hiddenInset',
  })
  win.loadFile('index.html')
  // win.loadURL('https://facebook.com')
}

app.on('ready', createWindow);
