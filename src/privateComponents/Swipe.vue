<template>
  <div class="swipe">
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="topArticle in topArticles">
            <img :src="changeImgUrl(topArticle.image)" :alt="topArticle.title">
            <span>{{topArticle.title}}</span>
          </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      data() {
        return {
          topArticles:{}
        }
      },

      created(){
        axios.get('api/news/latest')
          .then(response =>{
            this.topArticles=response.data.top_stories
            console.log(this.topArticles)
          })
          .catch(error => {
            console.log(error);
          })

      },

      methods:{
        changeImgUrl:function(srcUrl){
          if (srcUrl !== undefined) {
            return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
            console.log(srcUrl)
          }

        }
      }

  }

</script>

<style>
.swipe{
  width:100%;
  height:500px;
}

.swipe img{
  width:100%;
  height:auto;
}
</style>

