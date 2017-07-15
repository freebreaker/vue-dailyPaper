<template>
  <div>
    <HeaderBar></HeaderBar>
    <Swipe></Swipe>
    <NewsList></NewsList>
  </div>
</template>

<script>

import Swipe from '../privateComponents/Swipe.vue'

import NewsList from './NewsList.vue'

import HeaderBar from './HeaderBar.vue'


export default {

  components:{
    Swipe,
    NewsList,
    HeaderBar
  }

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding:0;
  color: #2c3e50;
  background-color:#f6f6f6;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


</style>
