<template>
	<div>
		<Headbg :activeColor ='activeColor'/>
		<div class="download">
			<img src="@/assets/images/banner_bg.png" alt="" class="fixbg" />
			<div class="downloadTit">生命互助APP下载</div>
			<div class="downloadPics">
				<div class="flex1">
					<img src="../assets/images/eren.png" alt="" />
				</div>
				<div class="flex2">
					<img src="@/assets/images/eren.png" alt="" />
				</div>
				<div class="flex3">
					<img src="@/assets/images/eren.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Headbg from "@/components/layouts/Headbg.vue"
 	
	export default{
		components:{
			Headbg
		},
		data(){
			return {
				activeColor:"download"
			}
		}
	}
</script>
 
<style scoped>
	.downloadTit{
		width: 1200px;
		margin:100px auto 30px;
	}
	.downloadPics{
		width: 1200px;
		margin:100px auto;
		display: flex;
	}
	.downloadPics div{
		align-self: center;
	}
	.flex1,.flex2{
		width: 30%;
		padding: 30px;
	}
	.flex3{
		width: 40%;
		text-align: right;
	}
	.download>div{
		font-size: 20px;
		color: #FFFFFF;
		letter-spacing: 0.75px;
	}
	.download img{
		width: 100%;
		overflow: hidden;
	}
	.fixbg{
		position: fixed;
	    top: 0;
	    z-index: -10;
	    width: 100%;
	    height: 100%;
	}

</style>