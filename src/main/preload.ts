const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI',
    {
        openPage:(url:string)=>ipcRenderer.invoke("open-page",url),
        startRecord:(url:string)=>ipcRenderer.invoke("start-record",url),
        setTitle:(title:string)=>ipcRenderer.send("set-title",title)
    }
)

