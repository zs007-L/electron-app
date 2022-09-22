import { ipcMain } from 'electron'
import type { BrowserWindow } from 'electron'

export function createEvent(win: BrowserWindow) {
  ipcMain.on('minimize', () => {
    win.minimize()
  })

  ipcMain.on('maximize', () => {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  })

  ipcMain.on('close', () => {
    win.close()
  })
}
