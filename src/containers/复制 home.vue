<template>
	<div id="home">
		<Headbg :activeColor ='activeColor'/>
		
		<div class="home">
		 	<div class="homediv1" :style="{height:clientHeight}">
		 		<div>
					<div class="globalpic" >
						<img src="@/assets/images/lianball_banner.png" style="width: 300px; height: 300px; margin: auto;" id="global" />
						<img src="@/assets/images/logo_banner.png" class="banlogo"/>
					</div>
					<div class="globalbtn">
						<a target="_blank" href="/static/pdf/inuWhiteBook.pdf">InUnion应有链白皮书</a>
						<a target="_blank" href="/static/pdf/NRCPurseUse1.0.pdf">INU钱包使用说明</a>
					</div>
					<div id="links">
						<el-popover placement="bottom" trigger="hover" >
						  <div class="link_i animate"  data-animate="headShake" data-duration="2.0s" data-delay="0.1s">
						  	<img src="@/assets/images/home/qq.png" width="120px" height="120px" alt="" />
						  </div> 
						  <a slot="reference"><i class="fa fa-qq"></i></a>
						</el-popover>
						<el-popover placement="bottom" trigger="hover">
						  <div class="link_i animate"  data-animate="headShake" data-duration="2.0s" data-delay="0.1s">
						  	<img src="@/assets/images/home/shequn.png" width="120px" height="120px" alt="" />
						  </div>
						  <a slot="reference"><i class="fa fa-wechat"></i></a>
						</el-popover>
						<el-popover placement="bottom" trigger="hover">
						  <div class="link_i animate"  data-animate="headShake" data-duration="2.0s" data-delay="0.1s">
						  	点击去微博
						  </div>
						  <a slot="reference" target="_blank" href="https://weibo.com/6579926764/profile?topnav=1&wvr=6&is_all=1">
							<i class="fa fa-weibo"></i> 
						   </a>
						</el-popover>
					</div>
				</div>
			</div>
			<div class="homediv2">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">项目愿景</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">Vision</div>
				<div class="homecontaint animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/icon_zijinbaozhang.png"/><br />可信的资金保障
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/icon_tuiguangtuandui.png" /><br />全球推广团队
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/icon_jiarumenkan.png" /><br />低廉的加入门槛
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/icon_baozhangtixi.png" /><br />全面的保障体系
					</div>
				</div>
			</div>
			<div class="homediv3">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">项目介绍</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">Introduction</div>
				<div class="homecontaint animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/introduction_con_bg.png" />
						<img src="@/assets/images/icon_qukuailianjishu.png" />
						<br />区块链技术
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/introduction_con_bg.png" />
						<img src="@/assets/images/icon_feiyinglixing.png" />
						<br />非营利性
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/introduction_con_bg.png" />
						<img src="@/assets/images/icon_shuzizichan.png" />
						<br />INU数字资产
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<img src="@/assets/images/introduction_con_bg.png" />
						<img src="@/assets/images/icon_rengongzhineng.png" />
						<br />人工智能技术
					</div>
				</div>
				<img src="@/assets/images/home/xiangmujieshao_ball.png" class="ball"/>
			</div>
			
			<div class="homediv4">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">INU生命互助优势</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">Advantage</div>
				<div class="homecontaint">
					<div class="col-md-3 col-sm-3 col-xs-6">
						<div class="animate"  data-animate="flipInY" data-duration="2.0s" data-delay="0.2s">
							<img src="@/assets/images/icon_peilv.png" />
							<br />保费低、赔率高
						</div>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<div class="animate"  data-animate="flipInY" data-duration="2.0s" data-delay="0.2s">
							<img src="@/assets/images/icon_xinxitouming.png" />
							<br />投保、理赔<br class="brhide"/>信息透明
						</div>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<div class="animate"  data-animate="flipInY" data-duration="2.0s" data-delay="0.2s">
							<img src="@/assets/images/icon_yongjiu.png" />
							<br />保单信息永久保存<br class="brhide"/>不可篡改
						</div>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<div class="animate"  data-animate="flipInY" data-duration="2.0s" data-delay="0.2s">
							<img src="@/assets/images/icon_lianshang.png" />
							<br />简化流程（链上审核）<br class="brhide"/>最快三分钟内赔付到账
						</div>
					</div>
				</div>
			</div>
			
			<div class="homediv5_1">
				<!--<canvas id="ropic"></canvas>-->
				<img id="ropic" src="@/assets/images/advantage_bg.png" class="ball1 animate" data-animate="role-ball1">
				<div>
					<img src="@/assets/images/big_tblc.png" class="animate"  data-animate="bounceInLeft" data-duration="5.0s" data-delay="0.2s"/>
					<img src="@/assets/images/big_sqlp.png" class="animate"  data-animate="bounceInRight" data-duration="5.0s" data-delay="0.3s"/>
				</div>
			</div>
			
			<div class="homediv6">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">开发进度</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">Roadmap</div>
				<div class="homecontaint">
					<canvas id="aircraft"></canvas>
					<div class="containtinner">
						<Timeline class="Timeline animate" data-animate="homediv6-Timeline"/>
						<img src="@/assets/images/home/Roadmap_bg_right.png" alt="" />
					</div>
				</div>
			</div>
			 
			<div class="homediv7">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">新闻动态</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">News</div>
				<div class="homecontaint">
					<img src="@/assets/images/news_bg.png" class="newsImg" />
					<el-row :gutter="12"  class="animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">
					  	<el-col  class="col-md-4 col-sm-4 col-xs-12" v-for='l in newsList' :key="l.id"> 
					  		<router-link tag='a' :to="'/newsdetails/'+l.id">
						    	<el-card shadow="hover">
						    
							      	<div slot="header" class="head">
									    <span>{{l.create_time|replace}}</span>
								    	<a><i class="el-icon-d-arrow-right"></i></a>
									</div>
									<div  class="title">
									     {{l.title}}
									</div>
									<div  class="text">
									    {{l.fu_title}} 
									</div>
						    	</el-card>
						 	</router-link>
					  	</el-col>
					</el-row>
					<div class="center animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">
						 <router-link tag='a' :to="'/news'"  class="btnblue">更多新闻</router-link>
					</div>
				</div>
			</div>
			
			<div class="homediv8">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">团队及顾问</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">Team</div>
				<div class="homecontaint animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">
					<template v-if="tim1" >
					  <el-carousel :interval="5000" arrow="always">
					    <el-carousel-item  :key="index" v-for="(li ,index) in nameList"> 
					     <div class="col-md-4" v-for="(i,index) in li" :key="index"><img :src="'/static/mTeam/'+i+'.png'" /> </div>			
					    </el-carousel-item>
					  </el-carousel>
					</template>
					<template v-if="tim2">
					  <el-carousel :interval="5000" arrow="always">
					    <el-carousel-item  :key="index" v-for="(li ,index) in nameList2"> 
					     <div class="col-xs-12"><img :src="'/static/mTeam/'+li+'.png'" /> </div>			
					    </el-carousel-item>
					  </el-carousel>
					</template>
				</div>
			</div>
			
			<div class="homediv9">
				<div class="homeTit animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">合作伙伴</div>
				<div class="homeTits animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.5s">Partnership</div>
				<div class="homecontaint animate"  data-animate="fadeInUp" data-duration="2.0s" data-delay="0.1s">
				     <div class="col-md-3 col-xs-6"><img src="@/assets/images/home/xinlang.png" /> </div>
				     <div class="col-md-3 col-xs-6"><img src="@/assets/images/home/dcon.png" /> </div>
				     <div class="col-md-3 col-xs-6"><img src="@/assets/images/home/zhongjing.png" /> </div>
				     <div class="col-md-3 col-xs-6"><img src="@/assets/images/home/NRC.png" /> </div>
				</div>
			</div>
		</div>
		<Top/>
		
	</div>
</template>
 
<script>

	import { mapState } from "vuex";
	import Headbg from "@/components/layouts/Headbg.vue"
	import Timeline from "@/components/Timeline.vue"
	import Top from "@/components/TOP.vue"
	import "@/utils/scrolla.jquery.min.js"
 	export default{
		components: {
			Headbg,Timeline,Top
		},
 		
		data(){
			const nameList=[
				['Lake ChenLiu','Yiliang Li','Runxiang Zheng'],
				['Jinpeng Fan','Yongning Jia','Baoliang Xiao'],
				['Deyong Song','Aiping Long','Zhengping Zhou'],
				['Youyan Guan','Xiujun Wang','Jianyong Zhu'],
				['Weiye Hu','Zhihui Du','Jun Sun'],
				['Hui Wang']];
			const nameList2=[
				'Lake ChenLiu','Yiliang Li','Runxiang Zheng',
				'Jinpeng Fan','Yongning Jia','Baoliang Xiao',
				'Deyong Song','Aiping Long','Zhengping Zhou',
				'Youyan Guan','Xiujun Wang','Jianyong Zhu',
				'Weiye Hu','Zhihui Du','Jun Sun',
				'Hui Wang'];	
			return {
				nameList,
				nameList2,
				activeColor:"index",
				scroll: '',
				tim1:true,
				tim2:false,
				clientHeight:$(window).height()+'px',
				timer : null,
			    start : 0,
			    end : 0,
			}
		},
		created(){
			this.$store.dispatch("getNewsList",{type :'/type/3',p:1})
		},
		computed: {  
            ...mapState({  
                newsList: state => state.layout.newsdata.newsList,
            }) 
        },
	
		mounted() {
 			this.getWidth();
 			
//			$(".banlogo, #global, .globalbtn, #links").hide()
//			setTimeout(function(){
//			 	$(".banlogo,#global,.globalbtn, #links ").addClass('animated fadeIn show');
//			},450);
//			
			//是否滚动
		 	$(".ball").addClass('animated role-ball');
		 	
		    const that = this;
		    window.onresize = function temp() {
		    	if (($(window).height())>600) {
		    		that.clientHeight=$(window).height()+'px';
		    	} else{
		    		that.clientHeight='600px';
		    	}
		    };
		    //星星
			setTimeout(function(){
				star('aircraft');
			},2500);			
 
			window.addEventListener('scroll', this.scrollfunc)
		    
		   	$(document).ready(function(){
     		   	if($(window).width()>1200){
     		   		var homediv6Pd = ($(window).width()-1200)/2;
     		   		$(".homediv6 .containtinner").css("padding-left",homediv6Pd+"px")
     		   	} else{
     		   		$(".homediv6 .containtinner").css("padding-left","0px")
     		   	}
			});

			//动画
		 	$('.animate').scrolla({
				mobile: false, // 是否允许在移动设备上执行滚动动画。
				once: true // 设置为true时，滚动动画只执行一次。
			});
			
			$(".homediv2 .homecontaint div img,.homediv3 .homecontaint div img").on('mouseover',function(){
				$(this).addClass('animated swing')
  			})
			$(".homediv2 .homecontaint div img,.homediv3 .homecontaint div img").on('mouseout',function(){
				$(this).removeClass('animated swing')
  			})
			 
			$(".homediv4 .homecontaint div img").on('mouseover',function(){
				$(this).addClass('animated rubberBand')
  			})
			$(".homediv4 .homecontaint div img").on('mouseout',function(){
				$(this).removeClass('animated rubberBand')
  			})
		
 	 	},
 	 	methods: {
 	 		getWidth(){
   	 			const screenWidth = screen.width;
 	 			if(screenWidth>1024){
 	 				this.tim1 = true;
 	 				this.tim2 = false;
 	 			}else{
 	 				this.tim1 = false;
 	 				this.tim2 = true;
 	 			}
 	 		},
 	 		 scrollfunc() {
        		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				//回到顶部
				scrollTop >200? $(".top").show():$(".top").hide()
				//旋转的球
				$(".homediv3 .ball").removeClass('animated role-ball')
				clearTimeout(this.timer)//滚动前清除
				this.timer = setTimeout(this.Data,1000);
				this.start = scrollTop;
		    },
		    Data(){
        		this.end = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if (this.end == this.start) {
					$(".homediv3 .ball").addClass('animated role-ball')

				}
		    }
   	 
	    } 
		
	}
 
 	
 	function star(id){
		var WINDOW_WIDTH = document.body.offsetWidth;
		var WINDOW_HEIGHT = document.body.offsetHeight;
		var canvas,context;
		var num = 300;
		var stars = [];
		var mouseX = WINDOW_WIDTH/2;
		var mouseY = WINDOW_HEIGHT/2;
		var rnd;
		
//		window.onload = function(){
			canvas = document.getElementById(id);
			canvas.width = WINDOW_WIDTH;
			canvas.height = WINDOW_HEIGHT;
	
			context = canvas.getContext('2d');
	
			addStar();
			setInterval(render,50);
			liuxing();
	
			// render();
			document.body.addEventListener('mousemove',mouseMove);
//		}
	
		function liuxing(){
			var time = Math.round(Math.random()*4000+33);
			setTimeout(function(){
				rnd = Math.ceil(Math.random()*stars.length)
				liuxing();
			},time)
		}
	
		function mouseMove(e){
			//因为是整屏背景，这里不做坐标转换
			mouseX = e.clientX;
			mouseY = e.clientY;
		}
	
		function render(){
			context.fillStyle ='rgba(0,0,0,0.1)';
			context.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
			context.clearRect(0,0,10+WINDOW_WIDTH,10+WINDOW_HEIGHT)
			for(var i =0; i<num ; i++){
				var star = stars[i];
				var colors = ['226, 213, 196,', '72,72,72,', '65,23,50,', '109,71,94,', '1,95,127,', '55, 15, 40,']
	
				if(i == rnd){
					star.vx = -30;
					star.vy = 50;
					context.beginPath();
					
					context.strokeStyle = 'rgba('+colors[star.color]+star.alpha+')';
	 				
					context.lineWidth =star.r;
					context.moveTo(star.x,star.y);
					context.lineTo(star.x+star.vx,star.y+star.vy);
					context.stroke();
					context.closePath();
				}
				star.alpha += star.ra;
				if(star.alpha<=0){
					star.alpha = 0;
					star.ra = -star.ra;
					star.vx = Math.random()*0.2-0.1;
					star.vy = Math.random()*0.2-0.1;
				}else if(star.alpha>1){
					star.alpha = 1;
					star.ra = -star.ra
				}
				star.x += star.vx;
				if(star.x>=WINDOW_WIDTH){
					star.x = 0;
				}else if(star.x<0){
					star.x = WINDOW_WIDTH;
					star.vx = Math.random()*0.2-0.1;
					star.vy = Math.random()*0.2-0.1;
				}
				star.y += star.vy;
				if(star.y>=WINDOW_HEIGHT){
					star.y = 0;
					star.vy = Math.random()*0.2-0.1;
					star.vx = Math.random()*0.2-0.1;
				}else if(star.y<0){
					star.y = WINDOW_HEIGHT;
				}
				context.beginPath();
				var bg = context.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r);
				bg.addColorStop(0,'rgba(255,255,255,'+star.alpha+')') 
				bg.addColorStop(1,'rgba(255,255,255,0)') 
				context.fillStyle  = bg;
				context.arc(star.x,star.y, star.r, 0, Math.PI*2, true);
				context.fill();
				context.closePath();
			}
		}
	
		function addStar(){
			for(var i = 0; i<num ; i++){
				var aStar = {
					x:Math.round(Math.random()*WINDOW_WIDTH),
					y:Math.round(Math.random()*WINDOW_HEIGHT),
					r:Math.random()*3,
					ra:Math.random()*0.05,
					alpha:Math.random(),
					color:parseInt(Math.random()*5),
					vx:Math.random()*0.2-0.1,
					vy:Math.random()*0.2-0.1
				}
				stars.push(aStar);
			}
		}
	}

 
</script>
 <style>

	@keyframes ballname {
		0%{transform: rotate(0deg);}
		50%{transform: rotate(180deg);}
		100%{transform: rotate(360deg);}
	}
	@-webkit-keyframes ballname{
		0%{transform: rotate(0deg);}
		50%{transform: rotate(180deg);}
		100%{transform: rotate(360deg);}
	}
 
	.role-ball{       
		animation:ballname 40s; /* Safari and Chrome */
		-webkit-animation: ballname 40s;
		animation-iteration-count:infinite;
		animation-timing-function:linear;
		/*animation-direction: alternate;*/
		/*animation-delay:2s;*/
		/*animation-play-state:running;*/
	}
	.role-ball1{
		animation:ballname 200s; /* Safari and Chrome */
		-webkit-animation:ballname 200s; /* Safari and Chrome */
		animation-iteration-count:infinite;
		animation-timing-function:linear;
		/*animation-direction: alternate;*/
		/*animation-delay:2s;*/
		/*animation-play-state:running;*/
	}
	.btnblue:hover{
		background: #3CC8C8;
		color: #fff;
	}
 	#stars{
		width: 100%;
	    height: 100%;
/*	    background: url(/static/img/banner_bg.b97cf09.png);*/
		background: #000000;
	    position: fixed;
	    top: 0;
	    z-index: -10;
	    background-size: 100% 100%;	
 	}
 
	#ropic{
        position: absolute;
        z-index: -2;
        width: 80%;
        height: auto;
        top: 0;
        left: 10%;
        margin-top: 40px;
    }
     #aircraft{
        background: url(../assets/images/home/Roadmap_bg_left.png);
        position: absolute;
        top: 0;
        width: 100%; 
        height: 100%;
        z-index: 10px;
        background-position-y: 20%;
        background-position-x: 0;
        background-size: 80% 80%;
    }

 </style>