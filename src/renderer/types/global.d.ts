export interface IElectronAPI {
	// getFilePath 方法时preload.ts中使用的方法，后面添加方法，此处也要同步申明
    setTitle: (value:number|string) => void;
    openPage: (value:string) => void;
    startRecord: () => void;
}
declare global {
    interface Window  {
        electronAPI: IElectronAPI;
      };
      const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
      const MAIN_WINDOW_VITE_NAME: string;

  }