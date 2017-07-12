<template>
  <div class="news-detail">
    <img :src="changeImgUrl(this.data.image)">
    <div class="body-wrap" v-html="data.body"></div>
  </div>
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
    this.fetchData();
  },
  methods: {
    // 获取路由参数上的id新闻具体内容
    fetchData: function() {

        // 获得新闻id
        let id = this.$route.params.id;
        console.log(this.$route)


        //axios发送请求，得到文章内容 

        axios.get('/api/news/' + id)
            .then(response =>{
                response.data.body=this.getImgUrl(response.data.body)
                this.data = response.data
                console.log(response.data)
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
<style scoped>

</style>
