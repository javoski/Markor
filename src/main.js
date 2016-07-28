import Vue from 'vue'
import App from './App'

import marked from 'marked'

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

new Vue({
  el: 'body',
  components: { App }
})
