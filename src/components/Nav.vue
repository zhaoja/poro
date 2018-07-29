<template>
	<div class="nav">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item>您的位置：<a href="/">首页</a> </el-breadcrumb-item>
		  <el-breadcrumb-item v-for="(n,s) in navdata" :key="s">
		  	<a v-bind:href="n.links" v-if="s!=navdata.length-1"><span :class="s==navdata.length-1?'blue':''">{{n.name}}</span></a>
		  	<span :class="s==navdata.length-1?'blue':''"  v-if="s==navdata.length-1">{{n.name}}</span>
		  </el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default{
		 props:['navdata']
	}
</script>
<style>
	.el-breadcrumb__inner a{
	    font-weight: 400;
	}
	.el-breadcrumb__inner a:hover{
		color: #000000 !important;  
	}
</style>
 