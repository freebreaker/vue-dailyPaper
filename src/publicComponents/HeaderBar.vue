<template>
    <header>
        <div class="wrap">
            <div class="sidebar">
                <div class="top">
                    <img src="" alt="" class="avatar">
                    <span class="name"></span>
                </div>

                <div class="menubar">
                    <div>
                        <i class="icon iconfont icon-shoucang"></i><br>
                        <span>收藏</span>
                    </div>
                    <div>
                        <i class="icon iconfont icon-xiaoxi"></i><br>
                        <span>消息</span>
                    </div>
                    <div>
                        <i class="icon iconfont icon-shezhi"></i><br>
                        <span>设置</span>
                    </div>
                </div>

                <div class="menu-wrapper" ref="menuWrapper">
                    <ul>
                        
                    </ul>
                </div>

                <div class="foot-menu">
                    <i class="icon iconfont icon-lixianwenjian">&nbsp;&nbsp;离线</i>
                    <i class="icon iconfont icon-yejianmoshi">&nbsp;&nbsp;夜间</i>
                </div>
            </div>
            
            <div class="mask">
            </div>
        </div>
    </header>

</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
  },
  methods: {}

}
</script>

<style lang="scss" scoped>

</style>
