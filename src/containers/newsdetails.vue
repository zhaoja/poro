<template>
	<div class="wihte_bg">
		<Nav :navdata='navdata'/>
		<Article :artdata='newsdetails'/>
		<div class="arbody" v-html="newsdetails.content"></div>
	</div>
</template>

<script>
	import { mapState } from "vuex";  

	import Nav from "@/components/Nav.vue"
	import Article from "@/components/Article.vue"
	
	export default{
		components:{
			Nav,Article
		},
		computed: {  
            ...mapState({  
                newsdetails: state => state.layout.newsdetails,                
            })  
        },
		created(){
			this.$store.dispatch("getNewsDetail",this.$route.params.id);
		},
		data(){
			return{
//				navdata:[ '新闻资讯','项目新闻','正文'],
				navdata:[
					{ links:'#/news',name:'新闻资讯'},
					{ links:'',name:'正文'}
				]
			}
		}
	}
</script>

<style>
	.arbody {
		max-width: 850px;
		margin: auto;
		padding:40px 15px;
		font-size: 14px;
		color: #333333;
		letter-spacing: 0.58px;
		line-height: 26px;
		text-align: left;
	}
	.arbody img{
		width: 90%;
		overflow: hidden;
		margin: 10px auto;
	}
	
</style>