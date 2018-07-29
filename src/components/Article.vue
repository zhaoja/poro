<template>
	<div class="article">
		<div class="arhead">
			<div class="artitle">{{artdata.title}}</div>
			<div class="artime" v-if="artdata.time">{{artdata.time}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		 props:['artdata']
	}
</script>
