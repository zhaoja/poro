<template>
	<div class="header">
	  	<el-menu 
	  		:default-active="this.$route.path"
			class="el-menu-demo"
			mode="horizontal"
			router
			@select="handleSelect"
			text-color="#333333"
			active-text-color="#3CC8C8">
			<el-menu-item index="index">
				<img src="@/assets/images/logo_blue.png" class="logos">
			</el-menu-item>
			<el-menu-item index="/index">首页</el-menu-item>
			<el-menu-item index="/product">产品与服务</el-menu-item>
			<el-menu-item index="/news">新闻动态</el-menu-item>
			<el-menu-item index="/relation">联系我们</el-menu-item>
			<!--<el-menu-item index="/download">APP下载</el-menu-item>
			<el-menu-item index="/translation">中文/English</el-menu-item>-->
		</el-menu>

	</div>
</template>

<script>
	export default {

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
</style>