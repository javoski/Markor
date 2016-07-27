const Vue = require('Vue')
const marked = require('marked')
const $ = require('jquery')

marked.setOptions({
    highlight: function (code, lang){
        if(lang && hljs.getLanguage(lang)){
            try {
                return hljs.highlight(lang, code).value;
            }catch(e){}
        }
        return code
    }
})
let app = new Vue({
    el: '#app',
    data: {
      input: '### Mark\n\n```javascript\nlet mark = \'a simple markdown editor\'\nconsole.log(mark)\n```\n\n```html\n<div class="ddd"><\/div>\n```\n\n* item 1\n* item 2\n\nThis is plain text.'
    },
    methods: {
        
    },
    filters: {
      marked: marked
    }
})

$(function() {
    let editor = CodeMirror.fromTextArea(document.getElementById('edit'), {
        mode: 'gfm',
        lineNumbers: false,
        matchBrackets: true,
        lineWrapping: true,
        theme: 'base16-light',
        extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
    })
    editor.on('change', (cm, obj) => {
        app.$data.input = cm.getValue()
    })
    let $edit = $('#editor'), 
        $marked = $('#marked'),
        clientHeight = document.documentElement.clientHeight
    $(window).on('resize', (e) => {
        clientHeight = document.documentElement.clientHeight
    })
    $edit.on('scroll', (e) => {
        let seh = $edit[0].scrollHeight - clientHeight, 
            smh = $marked[0].scrollHeight - clientHeight,
            scrollTop = $edit.scrollTop()
        $marked.scrollTop((scrollTop/seh)*smh)
    })
})