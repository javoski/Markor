<template>
  <div class="tab-item" @click="onClicked" :class="{ 'active': currentIndex === index }">
    <span class="item-title">{{ fileName }}</span>
  </div>
</template>

<script>
import { currentIndex } from '../vuex/getters'
import { selectDoc } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      currentIndex
    },
    actions: {
      selectDoc
    }
  },
  props: {
    index: Number,
    fileName: String
  },
  methods: {
    onClicked () {
      this.selectDoc(this.index)
      this.$dispatch('on-tab-clicked')
    }
  }
}
</script>