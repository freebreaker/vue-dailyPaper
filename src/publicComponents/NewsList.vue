<template>

  <div class="newsList">

    <ul class="list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="40" v-for="day in this.$store.state.list">
      <li>{{day.dateNum}}</li>
      <li class="list-item" v-for="article in day.articles" @click="articleDetails(article.id)"  :key="article.id">
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
          loading:false,
          date:Date,
          dateStr:'',
          dateToChinese:""
          
        }
      },

      created(){
        this.initDate()
      },

      methods:{
        fetchData:function(){
          axios.get('api/news/latest')
            .then(response =>{

              let articles=response.data.stories
              let ids=articles.map(story => story.id)
              console.log(response)
              let dateNum=this.dateToChinese

              this.$store.dispatch('addNews',{
                  dateNum:dateNum,
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
                  console.log(response)
                  let dateNum=this.dateToChinese

                  this.$store.dispatch('addNews',{
                      dateNum:dateNum,
                      articles:articles,
                      ids:ids
                  })
                })
                .catch(error => {
                    console.log(error)
                })
              this.DateToChinese()
              this.decreaseDate()

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
        DateToChinese:function(){
            let year = this.date.getFullYear();
            let month = this.date.getMonth() + 1;
            let day = this.date.getDate();
            month = month < 10 ? '0' + month : month; // 格式化月份，小于10前置0
            day = day < 10 ? '0' + day : day; // 格式化日期，小于10前置0;

            this.dateToChinese=month+"月"+day+"日"
        },

        decreaseDate:function(){
          this.date.setDate(this.date.getDate()-1)
          console.log(this.date+100000000)
          this.DateToString()
        },

        changeImgUrl:function(srcUrl){
          if (srcUrl !== undefined) {
            return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');

          }

        },
        
        articleDetails:function(id){
          this.$router.push({ name: 'newsDetails', params: { id: id } });
        },

        loadMore:function(){
            this.loading=true
            this.fetchMoreData()
            this.loading=false
        }
      }

  }

</script>

<style lang="scss" scoped>


.list {
    display:flex;
    flex-direction:column ;
    background:#f3f3f3;
    .list-item {
        height:90px;
        margin: 5px 10px;
	    	border-bottom: 1px solid #f5f5f5;
        background:#fff;
        border-radius:4px;
        .item-title {
            display: inline-block;
            width: 70%;
            box-sizing:border-box;
            padding: 15px 20px;
            font-weight:bold;
            font-family:"微软雅黑";
            line-height: 20px;
        }
        .image-wrapper {
            position: relative;
            float: right;
            padding-top:15px;
            .item-image {
                width: 75px;
                height: 60px;
            }

        }

    }
}


</style>

