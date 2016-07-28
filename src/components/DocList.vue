<template>
  <editor v-for="doc in docs" :content="doc.content" :index="$index"></editor>
</template>

<script>
import { docs, currentIndex } from '../vuex/getters'
import Editor from './Editor'

export default {
  vuex: {
    getters: {
      docs,
      currentIndex
    }
  },
  components: {
    Editor
  }
}
</script>