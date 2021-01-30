const {ipcRenderer} = require('electron')
let $ = require('jquery')
$('#sync').append(ipcRenderer.sendSync('synchronous-message','sync ping'))
ipcRenderer.on('asynchronous-reply',(event,arg) => {
    $('#async').append(arg)
})
ipcRenderer.send('asynchronous-message','async ping')