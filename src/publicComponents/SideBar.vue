<template>
  <div class="sidebar-box" :class="{'show-sidebar':showresult}">
    <div class="swiper-slide">
      <!--侧边栏头部-->
      <div class="sidebar-header">
        <div class="user">
          <img src="http://7xqch8.com1.z0.glb.clouddn.com/4.pic_hd.jpg" alt="">
          <p>卜成健</p>
        </div>
        <div class="function">
          <div class="function-sub">
            <i class="icon iconfont icon-wujiaoxing"></i>
            <p>我的收藏</p>
          </div>
          <div class="function-sub">
            <i class="iconfont icon-lixian"></i>
            <p>离线下载</p>
          </div>
        </div>
      </div>
      <!--侧边栏列表-->
      <div class="sidebar-list">
        <ul class="sidebar-list-ul">
          <li class="sidebar-list-li" v-for="item in list" @click="skipping(item.id)">
            <p>{{item.name}}</p>
            <div>+</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'


export default {
    props:["showresult"],
    data () {
      return {
        list: [],
        myresult:this.showresult
      }
    },



  created() {
      this.fetchData();
  },
  methods: {
      ShowSidebar:function(){
        this.$emit('hideSidebar')
      },
      skipping(id){
        this.$emit('hideSidebar')
        this.$router.push({ name: 'theme', params: { id: id } });
      },
      fetchData: function() {
            axios.get('api/themes')
            .then(response => {
                this.list = response.data.others;
                console.log(response)
                this.list.unshift({
                color: 0,
                thumbnail: '',
                description: '首页',
                id: -1,
                name: '首页'
                });
            })
            .catch(error => {
                console.log(error);
            });
      }
    }
  }   
</script>
<style lang="scss" scoped>


  .iconfont {
    font-family:"iconfont";
    font-size: 14px;
    font-style:normal;
    color: #ffffff;
  }
  .sidebar-box{
    position: fixed;
    transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 290px;
    left:-290px;
    z-index: 99;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
    &.show-sidebar{
      transform: translateX(290px);
    }
    .swiper-slide {
      font-size: 15px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .sidebar-box{
    .sidebar-header{
      background: #00A2EA;
      .user{
        display: flex;
        flex-direction: row;
        >img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        >p{
          margin-left: 20px;
          line-height: 30px;
          flex: 1;
          font-size: 18px;
          font-weight: 300;
          color: #ffffff;
        }
      }
    }
    .function{
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      color: #ffffff;
      .function-sub{
        padding-left: 52px;
        flex: 1;
        font-size: 13px;
        font-weight: 300;
        position: relative;
        >i{
          position: absolute;
          top: 0;
          left: 20px;
        }
      }
    }
  }

  .sidebar-list{
    padding-bottom: 20px;
    background: #f9f9f9;
    .sidebar-list-ul{
      .sidebar-list-li{
      height: 47px;
      line-height: 60px;
      display: flex;
      flex-direction: row;
      padding-left: 15px;
      >p{
        flex: 1;
      }
      >div{
        padding-right: 40px;
        font-size: 25px;
        font-weight: 200;
        color: #868686;
      }
    }
    }

  }



</style>
