<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-body">
      <doc-list></doc-list>
    </div>
  </div>
</template>

<script>
import store from './vuex/store'
import AppHeader from './components/AppHeader'
import DocList from './components/DocList'

export default {
  store,
  components: {
    AppHeader,
    DocList
  },
  events: {
    'on-tab-clicked': function () {
      this.$broadcast('on-tab-clicked')
    }
  }
}
</script>
  
<style>
@import './assets/styles/base.css';
.app-body {
  height: calc(100vh - 2.25em);
  position: relative;
  /*padding: 4px;*/
  background-color: #f6f6f6;
}
</style>
