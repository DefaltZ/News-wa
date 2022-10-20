const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 400,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if(BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') app.quit()
})

