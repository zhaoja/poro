<template>
	<div class="headerbg">
		<!--:default-active="activeIndex"-->
	  	<el-menu 
			class="el-menu-demo"
			mode="horizontal"
			router
			@select="handleSelect"
			text-color="#fff"
			background-color="transparent">			
			<el-menu-item index="/">
				<img src="@/assets/images/logo_white.png" class="logos">
			</el-menu-item>
			<el-menu-item index="index" :class="activeColor=='index'?color:''">首页</el-menu-item>
			<el-menu-item index="product">产品与服务</el-menu-item>
			<el-menu-item index="news">新闻动态</el-menu-item>
			<el-menu-item index="relation">联系我们</el-menu-item>
			<!--<el-menu-item index="download" :class="activeColor=='download'?color:''">APP下载</el-menu-item>
			<el-menu-item index="translation">中文/English</el-menu-item>-->
		</el-menu>
	</div>
</template>

<script>
	export default {
		props:['activeColor'],
	    data() {
	      return {
	        color: "mainblue",
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
  	}
</script>

<style>
	.logos{
		width: 42px;
		height: 44px;
		float: left;
	}
	.mainblue{
		color: #3CC8C8 !important;
	}
</style>