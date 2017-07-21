<template>

  <div class="ThemeList">
    <HeaderBar :headerTitle="this.headerTitle"></HeaderBar>
    <div class="ThemePhoto">
        <img class="articleImg" v-lazy="changeImgUrl(this.imgUrl)">
        <span class="articleTitle">{{description}}</span>
    </div>

    <ul class="list"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="40" ref="newsList">
        <li class="ThemeList-item" v-for="story in this.stories" @click="articleDetails(story.id)">
            <span class="item-title">{{story.title}}</span>
         <div class="image-wrapper">
            <img class="item-image" v-if="story.images" v-lazy="changeImgUrl(story.images[0])">
        </div>
        </li>

    </ul>

</div>
</template>

<script>
  import axios from 'axios'
  import HeaderBar from './HeaderBar.vue' 
  export default {
      data() {
        return {
          data:[],
          id: '',
          loading:false,
          title:'',
          headerTitle:"",
          imgUrl:'',
          description:'',
          stories:[]          
        }
      },


      created(){
          this.id = this.$route.params.id;
          this.fetchData();

      },
      components:{
       HeaderBar
      },

      methods:{
          fetchData:function(){
            axios.get('/api/theme/'+ this.id)
                .then(response => {
                    this.title=response.data.name
                    this.imgUrl=response.data.background
                    this.description=response.data.description
                    this.stories=response.data.stories
                    this.headerTitle=response.data.name

                })
                .catch(error => {
                    console.log(error)
                })

         },
            
          loadMore:function(){
            this.loading=true
            this.fetchData()
            this.loading=false
        
         },
         changeImgUrl:function(srcUrl){
          if (srcUrl !== undefined) {
          return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
            }
         },
         articleDetails:function(id){
          this.$router.push({ name: 'newsDetails', params: { id: id } });
        },
        ShowSidebar:function(){
        this.$emit('hideSidebar');
        }

    },


     watch: {
        '$route' (to, from) {
                //刷新参数放到这里里面去触发就可以刷新相同界面了
                this.id = this.$route.params.id;
                this.fetchData()
            }
        },
  }

</script>

<style lang="scss" scoped>
.themeNavWrap{
    width:100%;
    height:4.0625rem;
    position:absolute;
    top:0;
    z-index:10;
    background-color:#00a2ea;
    color:#fff;
    .iconfont{
        display:inline-block;
        font-size:1.25rem;
        line-height:4.0625rem;;
    }
    .icon-fanhui-copy{
        margin-left:1.875rem;
        font-size:30px;
    }
    .frontpage{
        margin-left:1.875rem;
    }

}

.ThemePhoto{
  
  height:300px;
  color: #fff;
  position:relative;
  .articleImg {
      width:100%;
  }
  .articleTitle{
      color:#fff;
      z-index:2;
      padding: 20px 20px;
      position:absolute;
      bottom:0;
      font-size: 20px;
      font-weight:bold;
      font-family:"微软雅黑";
      line-height: 25px;
  }
}


.list {
    display:flex;
    flex-direction:column ;
    background:#f3f3f3;
    .ThemeList-item {
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

