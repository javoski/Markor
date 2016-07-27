<template>
  <div class="editor">
    <textarea v-model="content" debounce="200" class="edit"></textarea>
  </div>
  <div v-html="content | marked" class="marked"></div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  filters: {
    marked: marked
  },
  ready () {

  }
}
</script>

<style>
  
</style>