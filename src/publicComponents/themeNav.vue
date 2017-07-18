<template>
    <header>
        <div class="themeNavWrap">
            <div class="themeNav">
                <i class="icon iconfont icon-fanhui-copy"></i>
                <i class="icon iconfont frontpage">首页</i>
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
  

  methods: {
      ShowSidebar:function(){
        this.$emit('hideSidebar');
        }

  }
}   
</script>

<style lang="scss" scoped>

.themeNavWrap{
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
        margin-left:1.875rem;
    }
    .frontpage{
        margin-left:1.875rem;
    }
    .icon-lingdang{
        margin-left:10rem;
    }
    .icon-fenxiang{
        margin-left:1.875rem;
    }
}

</style>
