<template>
  <div class="tab-list">
    <tab-item v-for="doc in docs" :index="$index" :file-name="doc.fileName" track-by="$index"></tab-item>
  </div>
</template>

<script>
import { docs, currentIndex } from '../vuex/getters'
import { selectDoc } from '../vuex/actions'

import TabItem from './TabItem'

export default {
  vuex: {
    getters: {
      docs,
      currentIndex
    },
    actions: {
      selectDoc
    }
  },
  components: {
    TabItem
  }
}
</script>

<style lang="less">
.tab-list {
  display: flex;
  flex: 1;
  overflow: auto;
  .tab-item {
    position: relative;
    flex: 1;
    text-align: center;
    background-color: #999;
    min-width: 125px;
    padding: 0 1em;
    font-size: 0.8em;
    line-height: 36px;
    height: 36px;
    overflow: hidden;
    word-break: break-all;
    &.active {
      color: #999;
      background-color: #f6f6f6;
    }
    .item-title {

    }
    .item-close {
      position: absolute;
      display: none;
      right: 10px;
      width: 18px;
      height: 18px;
      line-height: 18px;
      font-size: 18px;
      top: 9px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>