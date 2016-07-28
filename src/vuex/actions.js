export const initDocs = function ({ dispatch }, docs) {
  dispatch('INIT_DOCS', docs)
}

export const addDoc = function ({ dispatch }, doc) {
  dispatch('ADD_DOC', doc)
}

export const removeDoc = function ({ dispatch }, index) {
  dispatch('REMOVE_DOC', index)
}

export const editContent = function ({ dispatch }, index, content) {
    dispatch('EDIT_CONTENT', index, content)
}

export const selectDoc = function  ({ dispatch }, index) {
    dispatch('SELECT_DOC', index)
}

export const saveDoc = function ({ dispatch }, index) {
    dispatch('SAVE_DOC', index)
}

