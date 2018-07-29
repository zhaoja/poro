<template>
	<div class="wihte_bg">
	<div class="product mainWith">
		<div class="allTitle">
			<div class="chiTitle">产品与服务</div>
			<div class="engTitle">Service</div>
	    </div>
	    <div class="productTab">
		  	<el-tabs :tab-position="tabPosition" style="min-height: 200px;">
			    <el-tab-pane label="重疾保障计划">
			    	<div class="sMain tabMain">
					  	<div class="col-md-6"><img src="@/assets/images/eren.png"/></div>
					  	<div class="col-md-6">
					  		<div class="tabTitle">重疾保障计划</div>
					  		<div class="tabInner">
					  			本险种以特定重大疾病，如恶性肿瘤、心肌梗死、脑溢血等为保险对象，
					  			当被保人患有上述疾病时，由保险公司对所花医疗费用给予适当补偿的商
					  			业保险行为。根据保费是否返还来划分，
					  			可分为消费型重大疾病保险和返还型重大疾病保险。
					  		</div>
					  	</div>
					</div>
			    </el-tab-pane>
		    	<el-tab-pane label="意外保障计划">
			    	<div class="sMain tabMain">
					  <div class="col-md-6"><img src="@/assets/images/sanren.png"/></div>
					  <div class="col-md-6">
					  	<div class="tabTitle">意外保障计划</div>
					  		<div class="tabInner">
					  			本险种提供被保险人因遭受一般意外或交通意外伤害事故而死亡、
					  			伤残或门诊、住院医疗等的保险赔偿。本保险的商城为您准备了多款意外险，
					  			包括一年期综合意外险、短期综合意外险、交通意外险、人身意外险等。
					  		</div>
					  </div>
					</div>
		    	</el-tab-pane>
		  	</el-tabs>
		  
		  	<div class="sMain inds">
		  		<div class="col-md-3 col-sm-3 col-xs-6">
		  			<img src="@/assets/images/icon_news_1.png"/>
		  			<div class="text1">相互保障额度</div>
		  			<div class="text2">可赔付加入时INU数量的<br class="brhide"/>1000倍且不低于15万USDT</div>
		  		</div>
		  		<div class="col-md-3 col-sm-3 col-xs-6">
		  			<img src="@/assets/images/icon_news_3.png"/>
		  			<div class="text1">保障范围</div>
		  			<div class="text2">客运飞机、火车、轮船意<br class="brhide"/>外身故/高残</div>
		  		</div>
		  		<div class="col-md-3 col-sm-3 col-xs-6">
		  			<img src="@/assets/images/icon_news_3.png"/>
		  			<div class="text1">相互保障额度</div>
		  			<div class="text2">年满18岁</div>
		  		</div>
		  		<div class="col-md-3 col-sm-3 col-xs-6">
		  			<img src="@/assets/images/icon_news_4.png"/>
		  			<div class="text1">相互保障额度</div>
		  			<div class="text2">加入次日零时生效</div>
		  		</div>
		  	</div>
		
			<div class="sMain squer">
				<i class="el-icon-warning yellow"></i>请阅读
				<a href="#/insuranceNotice">《投保须知》</a>和
				<a href="#/insuranceClause">《保险条款》</a>了解更多详情
			</div>
			
			<div class="sMain squerShadow">
				<div class="squerTitle"><span></span>投保流程</div>
				<img src="@/assets/images/news_tblc.png" alt="" />
			</div>
			<div class="sMain squerShadow">
				<div class="squerTitle"><span></span>理赔流程</div>
				<img src="@/assets/images/news_lplc.png" alt="" />
			</div>
	    </div>
	</div>
	</div>
</template>

<script>
	import Nav from "@/components/Nav.vue"
 	export default{
 		components:{
 			Nav
 		},
 		data() {
	      	return {
	        	tabPosition: 'left'
	      	};
	   },
	   mounted(){
    		var winheight = $(window).width()
			if (winheight<950) {
				this.tabPosition = 'top'
			}else{
				this.tabPosition = 'left'
			}
	   }
 	}
</script>

<style>
	
</style>