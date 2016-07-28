<template>
  <div class="app-header">
    <tab-list></tab-list>
  </div>
</template>

<script>

import TabList from './TabList'

export default {
  components: {
    TabList
  }
}
</script>

<style lang="less">
.app-header {
  /*padding-left: 75px;*/
  display: flex;
  height: 2.3333em;
  align-items: center;
  transition: 0.2s background-color;
  max-width: 100%;
  -webkit-user-select: none;
  position: relative;
  outline: none;
  -webkit-app-region: drag;
  background-color: #cecccc;
  color: #fff;
  .title {
    flex: 1;
    text-align: center;
  }
}
</style>