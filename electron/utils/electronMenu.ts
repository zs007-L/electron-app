import { app, Menu } from 'electron'
import type { BrowserWindow, MenuItemConstructorOptions } from 'electron'

export function createMenu(win: BrowserWindow) {
  const menuList: MenuItemConstructorOptions[] = [
    {
      label: '文件',
      submenu: [
        {
          label: '打开'
        },
        {
          label: '退出',
          click: () => {
            app.quit()
          },
          accelerator: 'Ctrl+Q'
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(menuList)
  Menu.setApplicationMenu(null)
}
