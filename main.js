const electron = require('electron')
const app = electron.app
const Menu = electron.Menu
const MenuItem = electron.MenuItem
const BrowserWindow = electron.BrowserWindow

let mainWindow

app.setName('Mark')

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1000, 
        height: 600,
        minWidth: 320,
        minHeight: 300,
        titleBarStyle: 'hidden-inset',
    })
    mainWindow.setTitle('Markdown')
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
    // mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    createAppMenu()
}
function createAppMenu () {
    let menu = new Menu()
    let template = require('./scripts/menu.js')
    menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // if(process.platform !== 'darwin'){
        app.quit()
    // }
})

app.on('activate', () => {
    if(mainWindow === null){
        createWindow()
    }
})
