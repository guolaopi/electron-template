import { app, BrowserWindow } from "electron";

function createWindow() {
    const win = new BrowserWindow({
        show: false,
        width: 1024,
        height: 768,
        webPreferences: {
            contextIsolation: true,
        },
    });
    win.setMenuBarVisibility(false); // 隐藏菜单栏

    const devUrl = "https://github.com/guolaopi";
    win.loadURL(devUrl);

    win.once("ready-to-show", () => {
        win.show();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
