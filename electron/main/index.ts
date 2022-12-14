import { app, BrowserWindow } from 'electron'
import path from 'path'

import { createMenu } from '../utils/electronMenu'
import { createEvent } from '../utils/electronEvent'

const indexHTML = path.join(__dirname, '../../index.html')
const URL = process.env.VITE_DEV_SERVER_URL as string

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    }
    // frame: false
  })
  createEvent(win)
  createMenu(win)

  if (app.isPackaged) {
    win.loadFile(indexHTML)
  } else {
    win.loadURL(URL)
    // win.webContents.openDevTools()
  }

  win.on('close', (e: Event) => {
    e.preventDefault()
  })
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
