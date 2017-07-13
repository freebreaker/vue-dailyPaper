<template>
  <div class="swipe">
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="topArticle in topArticles" @click.native="articleDetails(topArticle.id)">
            <img class="articleImg" :src="changeImgUrl(topArticle.image)" :alt="topArticle.title">
            <span class="articleTitle">{{topArticle.title}}</span>
          </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
  import axios from 'axios'
  import routes from '../router.config.js'
  export default {
      data() {
        return {
          topArticles:{}
        }
      },

      created(){
        axios.get('/api/news/latest')
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

          }

        },

        articleDetails(id){
          this.$router.push({ name: 'newsDetails', params: { id: id } });
        }
      }

  }

</script>

<style lang="scss" scoped>
.swipe{
  height:640px;
  color: #fff;
  .articleImg {
      width:100%;
      position: absolute;
      bottom: -75px;
  
  }
  .articleTitle{
      position: absolute;
      z-index: 2;
      bottom: 0px;
      padding: 40px 20px;
      font-size: 60px;
      line-height: 70px;
  }
}

</style>

