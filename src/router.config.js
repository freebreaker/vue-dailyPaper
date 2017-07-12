import Index from './publicComponents/Index.vue'
import NewsList from './publicComponents/NewsList.vue'
import NewsDetails from './publicComponents/NewsDetails.vue'



export default [{
	path: '/',
	name:'index',
	component: Index
	},
	{
	path:'/newsDetails/:id',
	name:'newsDetails',
	component:NewsDetails
	}]