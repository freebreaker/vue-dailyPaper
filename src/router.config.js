import Index from './publicComponents/Index.vue'
import NewsList from './publicComponents/NewsList.vue'
import NewsDetails from './publicComponents/NewsDetails.vue'
import ThemeList from './publicComponents/ThemeList.vue'



export default [{
	path: '/',
	name:'index',
	component: Index
	},
	{
	path:'/newsDetails/:id',
	name:'newsDetails',
	component:NewsDetails
},
{
	path:'/themeList/:id',
	name:'themeList',
	component:ThemeList
}]