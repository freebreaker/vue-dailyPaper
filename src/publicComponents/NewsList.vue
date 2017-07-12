<template>
  <div class="newsList">
    <ul class="articlesList">
      <li v-for="article in articles">
        <span class="item-title">{{article.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      data() {
        return {
          articles:{}
        }
      },

      created(){
        this.fetchData()

      },

      methods:{
        fetchData:function(){
          axios.get('api/news/latest')
            .then(response =>{
              this.articles=response.data.stories
            })
            .catch(error => {
              console.log(error);
          })
        }
      }

  }

</script>

<style>

</style>

