<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import routes from './router.config.js'
import VueRouter from 'vue-router'
export default {
  name: 'app'
};

</script>

<style>
body{
  padding:0;
  margin:0;
  font-family: 'Helvetica Neue',Helvetica,Arial,Sans-serif;
}
</style>
