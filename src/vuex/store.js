import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
document model: {
    saved: Boolean,
    path: String,
    file: String,
    content: String
}
*/
const state = {
    docs: [
        {
            saved: true,
            path: '/User/xujiongbo/doc/',
            fileName: 'init.md',
            content: '### Mark\n\n```javascript\nlet mark = \'a simple markdown editor\'\nconsole.log(mark)\n```\n\n```html\n<div class="ddd"><\/div>\n```\n\n* item 1\n* item 2\n\nThis is plain text.'
        },
        {
            saved: true,
            path: '/User/xujiongbo/doc/',
            fileName: 'init2.md',
            content: '### Mark2\n\n```javascript\nlet mark = \'a simple markdown editor\'\nconsole.log(mark)\n```\n\n```html\n<div class="ddd"><\/div>\n```\n\n* item 1\n* item 2\n\nThis is plain text.'
        }
    ],
    currentIndex: 1
}

const mutations = {
    INIT_DOCS (state, docs) {
        state.docs = docs
    },
    ADD_DOC (state, doc) {
        state.docs.push(doc)
    },
    REMOVE_DOC (state, index) {
        state.docs.splice(index, 1)
    },
    EDIT_CONTENT (state, index, content) {
        state.docs[index].content = content
    },
    SELECT_DOC (state, index) {
        state.currentIndex = index
    },
    SAVE_DOC (state, index) {
        state.docs[index].saved = true
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})
