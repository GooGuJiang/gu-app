const { app, BrowserWindow, nativeImage } = require('electron');
// const url = require('url');
// const path = require('path');

function createWindow () {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "gu-app", //title
	titleBarOverlay: true,
    //icon: nativeImage.createFromPath('src/public/favicon.ico'), //ico
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      webSecurity: false,
      nodeIntegrationInSubFrames: true 
    }
  });

  // 加载应用 --打包react应用后，__dirname为当前文件路径
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, './build/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }));


  mainWindow.loadURL('http://localhost:3000/');

  // 解决应用启动白屏问题
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});