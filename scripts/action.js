const electron = require('electron')
const dialog = electron.dialog

let Action = {
    newFile () {
        
    },
    openFile () {
        
    },
    saveFile () {
        const options = {
            title: 'Save an document',
            filters: [
              { name: 'Markdown', extensions: ['md'] }
            ]
        }
        dialog.showSaveDialog(options, function (filename) {
        })
    },
    saveAs () {
        
    }
}

module.exports = Action