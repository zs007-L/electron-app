import { app, BrowserWindow } from 'electron'
import path from 'path'

const indexHTML = path.join(__dirname, '../../index.html')
const URL = process.env.VITE_DEV_SERVER_URL as string

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    }
  })

  if (app.isPackaged) {
    win.loadFile(indexHTML)
  } else {
    win.loadURL(URL)
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
