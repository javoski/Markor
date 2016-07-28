<template>
  <div class="editor-wrapper" :style="{'z-index': currentIndex===index?2:1}">
    <div class="editor" :id="'editor_'+index">
      <textarea :value="content" debounce="200" class="edit" :id="'edit_'+index"></textarea>
    </div>
    <div v-html="content | marked" class="marked" :id="'marked_'+index"></div>
  </div>
</template>

<script>
import marked from 'marked'
import $ from 'jquery'

import { editContent } from '../vuex/actions'
import { currentIndex } from '../vuex/getters'


export default {
  vuex: {
    getters: {
      currentIndex
    },
    actions: {
      editContent
    }
  },
  props: {
    index: {
      type: Number
    },
    content: {
      type: String,
      default: ''
    }
  },
  filters: {
    marked: marked
  },
  data () {
    return {
      isInited: false
    }
  },
  ready () {
    if(this.currentIndex === this.index) {
      this.initEditor()
    }
  },
  methods: {
    initEditor () {
      if(!this.isInited) {
        this.isInited = true
        let editor = CodeMirror.fromTextArea(document.getElementById('edit_'+this.index), {
          mode: 'gfm',
          lineNumbers: false,
          matchBrackets: true,
          lineWrapping: true,
          autofocus: true,
          theme: 'base16-light',
          extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
        })

        editor.on('change', (cm, obj) => {
          this.editContent(this.index, cm.getValue())
        })

        let $edit = document.getElementById('editor_'+this.index), 
          $marked = document.getElementById('marked_'+this.index),
          clientHeight = document.documentElement.clientHeight

        window.addEventListener('resize', (e) => {
          clientHeight = document.documentElement.clientHeight
        })

        $edit.addEventListener('scroll', (e) => {
          let seh = $edit.scrollHeight - clientHeight, 
            smh = $marked.scrollHeight - clientHeight,
            scrollTop = $edit.scrollTop
          $marked.scrollTop = (scrollTop/seh)*smh
        })
      }
    }
  },
  events: {
    'on-tab-clicked': function () {
      console.log(this.index)
      if(this.currentIndex === this.index) {
        this.initEditor()
      }
    }
  }
}
</script>

<style lang="less">
.editor-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.editor, .marked {
  float: left;
  width: 50%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  overflow-y: auto;
}
.marked {
  padding: 20px;
  background-color: #fff;
}
.editor {
  border-right: 1px solid #ccc;
  background-color: #f6f6f6;
  textarea{
    opacity: 0;
  }
  .CodeMirror {
    min-height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>