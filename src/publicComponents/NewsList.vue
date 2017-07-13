<template>
  <div class="newsList">
    <ul class="list"
    v-infinite-scroll="loadMore">
      <li class="list-item" v-for="article in this.$store.state.articles">
        <span class="item-title">{{article.title}}</span>
        <div class="image-wrapper">
            <img class="item-image" v-lazy.newsList="changeImgUrl(article.images[0])" :alt="article.title">
        </div>
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

        changeImgUrl:function(srcUrl){
          if (srcUrl !== undefined) {
            return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');

          }

        },

        loadMore:function(){
            this.fetchMoreData()
        }
      }

  }

</script>

<style lang="scss" scoped>


.list {
    display:flex;
    flex-direction:column ;
    .list-item {
        height:90px;
        margin: 0 15px;
		border-bottom: 1px solid #f5f5f5;
        .item-title {
            display: inline-block;
            width: 70%;
            padding-top: 15px;
            line-height: 20px;
        }
        .image-wrapper {
			position: relative;
			float: right;
			padding-top: 15px;
            .item-image {
                width: 75px;
                height: 60px;
            }

        }

    }
}


</style>

