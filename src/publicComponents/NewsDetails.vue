<template>
  <div class="news-detail">
    <HeaderBar></HeaderBar>    
    <div class="swipe">
        <img class="articleImg" v-lazy="changeImgUrl(this.data.image)">
        <span class="articleTitle">{{data.title}}</span>
        <span class="image-source">{{this.data.image_source}}</span>
    </div>

    <div class="body-wrap" v-html="data.body"></div>
  </div>
</template> 
<script>
import axios from 'axios'

import HeaderBar from './HeaderBar.vue'

export default {
  data() {
    return {
      data: {},
      imgId:""
    };
  },
  created() {
    this.fetchData();
  },
  components:{
    HeaderBar
  },
  methods: {
    // 获取路由参数上的id新闻具体内容
    fetchData: function() {

        // 获得新闻id
        let id = this.$route.params.id;



        //axios发送请求，得到文章内容 

        axios.get('/api/news/' + id)
            .then(response =>{
                response.data.body=this.getImgUrl(response.data.body)
                this.data = response.data
                console.log(response.data.images)
                this.imgId=response.data.images.join("")

            })
            .catch(error => {
            console.log(error);
            })
    },


    //修改获得内容里的图片url
    getImgUrl:function(body){
      return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=')
    },

    //修改details内容最上面的图片地址
    changeImgUrl:function(srcUrl){
        if (srcUrl !== undefined) {
            return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
        }    
    }

   }
}
</script>

<style lang="scss" scoped>

.swipe{
  height:200px;
  color: #fff;
  font-family:"微软雅黑";
  position:relative;
  overflow-y: hidden;
  .articleImg {
      width:100%;
      position: absolute;
      top:0;
  }
  .articleTitle{
      position: absolute;
      z-index: 2;
      bottom: 10px;
      padding: 30px 20px;
      font-size: 20px;
      line-height: 25px;
  }
  .image-source{
      position: absolute;
      right: 8px;
      bottom: 10px;
      font-size: 12px;
      color: #ccc;
  }
   .body-wrap{
    position: absolute;
    width: 100%;
    top: 0;
    padding-bottom: 44px;
   }
}

</style>
