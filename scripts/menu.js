let Action = require('./action.js')

let template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New',
                accelerator: 'CmdOrCtrl+N',
                click: function (item, window) {
                    Action.newFile()
                }
            },
            {
                label: 'Open...',
                accelerator: 'CmdOrCtrl+O',
                click: function (item, window) {
                    Action.openFile()
                }
            },
            {
                label: 'Save',
                accelerator: 'CmdOrCtrl+S',
                click: function (item, window) {
                    Action.saveFile()
                }
            },
            {
                label: 'Save As...',
                accelerator: 'CmdOrCtrl+Shift+S',
                click: function (item, window) {
                    Action.saveAs()
                }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'CmdOrCtrl+Z',
                role: 'undo'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+CmdOrCtrl+Z',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'CmdOrCtrl+X',
                role: 'cut'
            },
            {
                label: 'Copy',
                accelerator: 'CmdOrCtrl+C',
                role: 'copy'
            },
            {
                label: 'Paste',
                accelerator: 'CmdOrCtrl+V',
                role: 'paste'
            },
            {
                label: 'Select All',
                accelerator: 'CmdOrCtrl+A',
                role: 'selectall'
            },
            {
                type: 'separator'
            },
            {
                label: 'Find',
                accelerator: 'CmdOrCtrl+F',
                click: function (item, window) {
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: function(item, window){
                    if(window){
                        window.reload()
                    }
                }
            }
        ]
    }
]
if (process.platform === 'darwin') {
    template.unshift({
        label: 'Markdown',
        submenu: [
            {
                label: 'About',
                role: 'about',
                click: function (item, window) {
                    
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Preferences',
                accelerator: 'CmdOrCtrl+,',
                click: function (item, window) {
                }
            },
            {
                label: 'Check for Updates...',
                click: function (item, window) {
                }
            },
            {
                label: 'Services',
                role: 'services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                label: 'Hide',
                accelerator: 'CmdOrCtrl+H',
                role: 'hide'
            },
            {
                label: 'Hide Others',
                accelerator: 'CmdOrCtrl+Shift+H',
                role: 'hideothers'
            },
            {
                label: 'Show All',
                role: 'unhide'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: function () {
                }
            }
        ]
    })
}else if(process.platform === 'win32'){
    let helpItem = template[template.length-1]
    
    helpItem.submenu.unshift({
        label: 'Check for Updates...',
        accelerator: '',
        click: function () {
        }
    })

    helpItem.submenu.unshift({
        label: 'About',
        click: function (item, window) {
        }
    })
}
module.exports = template