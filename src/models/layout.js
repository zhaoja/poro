//import $http from '../utils/http.js';
import HtmlUtil from '../utils/HtmlUtil.js';

export default {
	state: {
		newsdata:{
			newsList:[],
			count:""
		},
		newsdetails:{
			title:"",
			time:"",
			content:"",
			id:""
		}
	},
	actions: {
		getNewsList({ commit, state },param){			 
// 			$http.option("http://inuadmin.inuc.io/Home/Interface/getAll.html",param).then(({ status, msg, data})=>{
//              if(status == "succcess"){
//                 var mydata={};
//                 commit(infosuccess,mydata)
//              }
//          })
		 	var success_jsonpCallback ;
			$.ajax({
	            url:'http://inuadmin.inuc.io/Home/Interface/getAll'+param.type+'/p/'+param.p,
	            type:'GET',
	            dataType:"jsonp",
		        jsonp:"callback",
		        jsonpCallback:"success_jsonpCallback",
	            success:function (data) {
	            	var newdata = {
	            		newsList:data.msg,
	            	    count:data.count
	            	}
	            	commit("getNewsSuccess", newdata)
	            },
	            error:function () {
	            	
	            }
	        })
			
		},
		getNewsDetail({ commit, state },id){			 

			var success_jsonpCallback ;
			$.ajax({
	            url:'http://inuadmin.inuc.io/Home/Interface/getArticleDetails.html?id='+id,
	            type:'GET',
	            dataType:"jsonp",
		        jsonp:"callback",
		        jsonpCallback:"success_jsonpCallback",
	            success:function (data) {
	            	var newdata = {
	            		newsList:data.msg,
	            	}
	            	newdata.id = id
	            	commit("getNewsDetailSuccess", newdata)
	            },
	            error:function () {
	            	
	            }
	        });
		}
	},
	mutations: {
		getNewsSuccess(state, newdata) {

			state.newsdata.newsList = newdata.newsList.map(function(value,key,arr){
			  	value.content = HtmlUtil.htmlDecode(value.content)    
			  	value.create_time = HtmlUtil.htmlDecode(value.create_time).split(" ")[0];    
			    return value;
			})			
			state.newsdata.count = newdata.count;
		},
		getNewsDetailSuccess(state, newdata) {
			
			state.newsdetails.title = HtmlUtil.htmlDecode(newdata.newsList.title);
			state.newsdetails.time = HtmlUtil.htmlDecode(newdata.newsList.create_time).split(" ")[0];			
			state.newsdetails.content = HtmlUtil.htmlDecode(newdata.newsList.content);
			state.newsdetails.id = newdata.id;
		}
	}
	
}