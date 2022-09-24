import { app, Menu, dialog } from 'electron'
import type { BrowserWindow, MenuItemConstructorOptions } from 'electron'
import fs from 'fs'
import path from 'path'

export function createMenu(win: BrowserWindow) {
  const menuList: MenuItemConstructorOptions[] = [
    {
      label: '文件',
      submenu: [
        {
          label: '打开',
          click: () => {
            dialog
              .showOpenDialog(win, {
                title: '打开文件',
                filters: [{ name: 'All Files', extensions: ['*'] }]
              })
              .then((res) => {
                console.log(res)
              })
          }
        },
        {
          label: '新建',
          click: () => {
            const fileName = Math.random().toString(36)
            const filePath = path.resolve(__dirname, '../file')
            fs.writeFile(`${filePath}${fileName}.txt`, '', 'utf-8', (res) => {
              console.log(res)
            })
          }
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
  Menu.setApplicationMenu(menu)
}
