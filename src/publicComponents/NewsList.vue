<template>
  <div class="newsList">
    <ul class="list"
    v-infinite-scroll="loadMore">
      <li class="list-item" v-for="article in this.$store.state.articles" @click="articleDetails(article.id)">
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
        
        articleDetails:function(id){
          console.log(555555555)
          this.$router.push({ name: 'newsDetails', params: { id: id } });
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
        height:200px;
        margin: 10px 15px;
		border-bottom: 1px solid #f5f5f5;
        background:#fff;
        border-radius:4px;
        .item-title {
            display: inline-block;
            width: 70%;
            box-sizing:border-box;
            padding: 40px;
            font-size:40px;
            font-weight:bold;
            font-family:"微软雅黑";
            line-height: 45px;
        }
        .image-wrapper {
			position: relative;
			float: right;
			padding: 30px 20px;
            .item-image {
                width: 180px;
                height: 144px;
            }

        }

    }
}


</style>

