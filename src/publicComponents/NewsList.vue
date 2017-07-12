<template>
  <div class="newsList">
    <ul class="articlesList"
    v-infinite-scroll="loadMore">
      <li v-for="article in this.$store.state.articles">
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
          date:Date,
          dateStr:''
        }
      },

      created(){
        
        this.initDate()
        this.fetchData()
        this.loadMore()

      },

      methods:{
        fetchData:function(){
          axios.get('api/news/latest')
            .then(response =>{

              let articles=response.data.stories
              let ids=articles.map(story => story.id)

              this.$store.dispatch('addNews',{
                  articles:articles,
                  ids:ids
              })
            })
            .catch(error => {
              console.log(error);
          })


        },

        fetchMoreData:function(){
            axios.get('/api/news/before/' + this.dateStr)
                .then(response => {
                    
                    let articles=response.data.stories
                    let ids=articles.map(story => story.id)
                    console.log(ids)

                    this.$store.dispatch('addNews',{
                        articles:articles,
                        ids:ids
              })
                })
                .catch(error => {
                    console.log(error)
                })
        },

        initDate:function(){
            this.date=new Date()
            this.DateToString()
        },

        DateToString:function(){
            let year = this.date.getFullYear();
            let month = this.date.getMonth() + 1;
            let day = this.date.getDate();
            month = month < 10 ? '0' + month : month; // 格式化月份，小于10前置0
            day = day < 10 ? '0' + day : day; // 格式化日期，小于10前置0;

            this.dateStr = year + month + day;
            console.log(this.dateStr)
        },

        loadMore:function(){
            this.fetchMoreData()
        }
      }

  }

</script>

<style>

</style>

