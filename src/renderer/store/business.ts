// src/store/counterStore.ts
import { defineStore } from 'pinia';
type currentIsRecord = "none"| "record"| "stop" | "end";
// 定义并导出 Store
export const useBusiDataStore = defineStore('busidata', {
  state: () => ({
    // 录制方式
    recordstyle: 0,
    //录制状态
    currentIsRecord: 'none' as currentIsRecord,
    webpageWsUrl: '',
  }),
  actions: {
    selectRecordStyle(value:number) {
      this.recordstyle = value;
    },
    getTextByRecordStatus(){
      switch(this.currentIsRecord){
        case 'none': return "未开始";
        case 'record': return "录制中";
        case 'stop': return "已暂停";
        case 'end': return "已结束"
      }
    },
    //获取录制网页调试websocket地址
    async getRecordWsUrl(){
    try{
      const response = await fetch("http://localhost:9222/json/version");
      const data = await response.json();
      this.webpageWsUrl = data.webSocketDebuggerUrl;
      console.log("获取录制网页调试websocket地址成功", data.webSocketDebuggerUrl)
      return true;
      }catch(error){
        console.error("获取录制网页调试websocket地址失败", error);
      }
    }

  }
});