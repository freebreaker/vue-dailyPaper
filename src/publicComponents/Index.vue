<template>
  <div>
    <HeaderBar v-on:hideSidebar="toggleSidebar"></HeaderBar>    
    <SideBar  :showresult="isShowSidebar"  v-on:hideSidebar="toggleSidebar"></SideBar>
    <Swipe></Swipe>
    <NewsList></NewsList>
    <div class="cover" v-if="isShowSidebar" @click="toggleSidebar"></div>
  </div>
</template>

<script>
import Swipe from '../privateComponents/Swipe.vue'

import NewsList from './NewsList.vue'

import HeaderBar from './HeaderBar.vue'

import SideBar from "./SideBar.vue"


export default {
  data() {
    return {
      isShowSidebar: false
    }
  },
  components:{
    Swipe,
    NewsList,
    HeaderBar,
    SideBar
  },

  methods:{
    toggleSidebar() {
       this.isShowSidebar=!this.isShowSidebar
       
    }
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
}

.cover{
    position: fixed;
    transform: translateZ(0);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.7);
}
</style>
