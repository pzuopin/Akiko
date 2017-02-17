'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDev = process.env.NODE_ENV === 'development';

let config;

if (isDev) {
	config = require('../build/config');
} else {
	config = {};
}

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	const url = isDev ? `http://localhost:${config.port}` : `file://${__dirname}/dist/index.html`;
	mainWindow.loadURL(url);

	// Open the DevTools.
	if (isDev) {
		mainWindow.webContents.openDevTools();

		const installExtension = require('electron-devtools-installer');
		installExtension.default(installExtension.VUEJS_DEVTOOLS)
			.then(name => console.log(`Added Extension:  ${name}`))
			.catch(err => console.log('An error occurred: ', err));
	}

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});
