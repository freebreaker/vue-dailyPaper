<template>
    <header>
        <div class="sidewrap">
            <div class="sidebar">
                <i class="icon iconfont " 
                :class="{'icon-nopic-copy':this.$route.name!==this.newsDetails}"
                @click="toggleSidebar"></i>

               <i class="con iconfont toptitle" v-if="this.$route.name!==this.newsDetails" 
                v-show="this.$route.name!==this.themeList"  
                >今日新闻</i>

               <i class="icon iconfont"  :class="{'icon-fanhui':this.$route.name===this.newsDetails}" @click="backToIndex"></i>
                <i class="icon iconfont frontpage">{{headerTitle}}</i>
                <i class="icon iconfont icon-lingdang"></i>
                
                <i class="icon iconfont icon-fenxiang"></i>
            </div>
            
            <SideBar :showresult="isShowSidebar" v-on:hideSidebar="toggleSidebar"></SideBar>

            <div class="cover" v-if="isShowSidebar" @click="toggleSidebar"></div>
        </div>


    </header>





</template>
<script>

import axios from 'axios'

import SideBar from "./SideBar.vue"


export default {
      props: {
       headerTitle: String  //定义传值的类型<br>    }
        },
  data() {
    return {
      data: {},
      isShowSidebar: false,
      newsDetails:"newsDetails",
      themeList:"themeList"
    };
  },



  created() {
      console.log(this.$route.name)
  },

  components:{
       SideBar 
  },
  methods: {
      toggleSidebar() {
        this.isShowSidebar=!this.isShowSidebar
      },
      backToIndex(){
        this.$router.back(-1)
      }

    }
}   
</script>

<style lang="scss" scoped>

.sidewrap{
    width:100%;
    height:4.0625rem;
    position:fixed;
    top:0;
    z-index:10;
    background-color:#00a2ea;
    color:#fff;
    .iconfont{
        display:inline-block;
        font-size:1.25rem;
        line-height:4.0625rem;;
    }
    .icon-nopic-copy{
        margin-left:9%;
    }
    .toptitle{
        margin-left:5%;
    }
    .icon-fanhui{
        margin-left:6%;
        font-size:2.25rem;
    }
    .frontpage{
        margin-left:1.875rem;
    }
    .icon-lingdang{
        position:absolute;
        right:20%;
    }
    .icon-fenxiang{
        position:absolute;
        right:8%;
    }
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
