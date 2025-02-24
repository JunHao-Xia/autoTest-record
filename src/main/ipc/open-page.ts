import { IpcMainInvokeEvent, app } from "electron";
import { spawn } from 'node:child_process';
interface IPCMainInvokeFnTypes {
    (e: IpcMainInvokeEvent, url?: string): any;
}
export const openPage: IPCMainInvokeFnTypes = (e, url) => {
    //获取electron.exe 的路径
    const exePath = app.getPath('exe');
    const cwd = exePath.slice(0, exePath.lastIndexOf("\\"));
    const child = spawn(exePath, [url, `--remote-debugging-port=9222`], { cwd })
    child.stdout.on("data", (data) => {
        console.log("打开完毕")
    })
    return true;
}