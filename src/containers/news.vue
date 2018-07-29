<template>
	<div class="wihte_bg">
		<div class="news_banner">
			<img src="../assets/images/news_banner_bg.png" style="width: 100%;height:auto;"/>
		</div>
		<div class="product mainWith news">
			<div class="allTitle">
				<div class="chiTitle">新闻动态</div>
				<div class="engTitle">News</div>
		    </div>
		    <div class="productTab"> 
			  	<el-tabs :tab-position="tabPositionNews" v-model="activeName"  @tab-click="handleClick">
				    <el-tab-pane :label="n.cname" :name="n.name"  v-for="n in news" :key="n.id">
				    	<div class="sMain tabMain newsMain hand"  v-for="nl in newsList" :key="nl.id" @click="getDetail(nl.id)">
				  			<div class="inleft">
				  				<div class="tabTitle2">{{nl.title}}</div>
					  			<div class="tabInner2" v-html="nl.fu_title"></div>
				  			</div>
				  			<div class="inright">
				  				<time>{{nl.create_time}}</time>
				  				<i class="el-icon-d-arrow-right"></i>
				  			</div>
						</div>
						
	  					<div class="pages">
							<el-pagination
							  background
	     	 				  @current-change="handleCurrentChange"
							  layout="prev, pager, next"
							  :page-size="7"
							  :total="parseInt(count)">
							</el-pagination>
						</div>
				    </el-tab-pane>
			  	</el-tabs>
			
		    </div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	import Nav from "@/components/Nav.vue"  
	
 	export default{
 		components:{
 			Nav
 		},
 		computed: {  
            ...mapState({  
                newsList: state => state.layout.newsdata.newsList,
                count: state => state.layout.newsdata.count
            })  
        },
 		data() {
	      	return {
	      		news:[
	      			{cname:"全部",name:'all'},
	      			{cname:"公司动态",name:'company'},
	      			{cname:"行业资讯",name:'industry'}
	      		],
	      		activeName: 'all',
	        	tabPositionNews: 'left',
	      	};
	    },
	    
   		created(){
   			this.getNews({type :'',p:1});
   		},
   		mounted(){
    		var winheight = $(window).width()
			if (winheight<950) {
				this.tabPositionNews = 'top'
			}else{
				this.tabPositionNews = 'left'
			}
	  	},
	    methods:{
 			handleCurrentChange(val) {
 				let data = {type :'',p:1};
 				if(this.activeName=="all"){
 					data.type = '';
 				}else if (this.activeName=='company') {
	    	 		data.type = '/type/1';	    	 		
	    	 	}else{
	    	 		data.type = '/type/2';	    	 		
	    	 	}
	    	 	data.p = val;
		        this.getNews (data) ;
		    },		     
	    	handleClick(tab, event) {
	    	 	
	    	 	let data = {type :'',p:1};
	    	 	if (tab.name=='all') {
	    	 		data.type = '';
	    	 	} else if (tab.name=='company') {
	    	 		data.type = '/type/1';
	    	 		data.p = 1;
	    	 		
	    	 	} else{
	    	 		data.type = '/type/2';
	    	 		data.p = 1;
	    	 	}
				this.getNews (data) 
		    },
	    	getNews (data){
	    		this.$store.dispatch("getNewsList",data)
	    	},
	    	getDetail(id){
	    		this.$router.push({
		    		path: '/newsdetails', 
		            name: '新闻详情',
		            params: { 
		                'id': id, 
		            }
            	})
	    		this.$store.dispatch("getNewsDetail",id)
	    	}
	    }
	    
 	}
</script>
<style scoped="scoped">
	.hand{
        cursor: pointer;
        cursor: hand;
	}
	@media screen and (min-width: 1024px){
		.news_banner{
			height: 360px;overflow: hidden;
		}
	}
	@media screen and (max-width: 1024px){
		.news_banner{
			height: auto;overflow: hidden;
		}
	}
</style>
