import { ipcMain } from "electron";
import { openPage } from "./ipc/open-page";
export function initIPC(){
    ipcMain.handle("open-page",(e,url)=>{
        const isSuccess = openPage(e,url);
        return isSuccess;
    })
    //开始录制
    ipcMain.handle("start-record",(e,url)=>{
        //连接相关录制逻辑
        console.log("开始录制")
    })
    
}