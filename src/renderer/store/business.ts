// src/store/counterStore.ts
import { defineStore } from 'pinia';

// 定义并导出 Store
export const useBusiDataStore = defineStore('busidata', {
  state: () => ({
    recordstyle: 0,
  }),
  actions: {
    selectRecordStyle(value:number) {
      this.recordstyle = value;
    }
  }
});