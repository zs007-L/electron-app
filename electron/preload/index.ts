import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  send: (event: string, data: any) => {
    ipcRenderer.send(event, data)
  }
})
