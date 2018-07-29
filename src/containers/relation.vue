<template>
	<div class="wihte_bg">
		<div class="relation">
			<div class="map" id="mapDiv"></div>
			<div class="positionTxt">
			  	<div class="col-md-6">
			  		<div class="positionTit"><i class="fa fa-location-arrow"></i>地址：</div>
			  		<div class="positionMa">北京市朝阳区三里屯sohoC座1102</div>
			  	</div>
			  	<div class="col-md-6">
			  		<div class="positionTit"><i class="fa fa-bus"></i>路线：</div>
			  		<div class="positionMa">地铁10号线 团结湖站D口，走路10分钟即到</div>
			  	</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				CityInfo: {
					longitude: 116.461007,
					latitude: 39.938608
				},
			}
		},
		methods: {
			mapInit() {
				let that = this
				let script = document.createElement("script")
				script.src = "http://api.map.baidu.com/api?v=2.0&ak=zishHhU993mnCRDS3zncmazHuZkIRfti&callback=createMap"
				document.head.appendChild(script)
				window.createMap = () => {
					//创建Map实例
					var map = new BMap.Map("mapDiv"); // 创建Map实例
					var point = new BMap.Point(this.CityInfo.longitude, this.CityInfo.latitude);

					map.centerAndZoom(point, 11); // 创建点坐标,初始化地图,设置中心点坐标和地图级别
					 
					map.addControl(new BMap.NavigationControl({
						anchor: BMAP_ANCHOR_TOP_LEFT
					}));
					var icon = new BMap.Icon('/static/us_point.png', // 百度图片
		　　　　　　　　	new BMap.Size(10, 22), // 视窗大小
		　　　　　　　　 	{　　　　　　　　　　
							imageSize: new BMap.Size(144, 92), // 引用图片实际大小
							imageOffset: new BMap.Size(-20, 0) // 图片相对视窗的偏移
						});
					var marker = new BMap.Marker(new BMap.Point(that.CityInfo.longitude, that.CityInfo.latitude), {
						icon: icon
					});
					map.addOverlay(marker); // 将标注添加到地图中

					map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
					map.enableInertialDragging(); //两秒后开启惯性拖拽
					var opts = {
						width: 150, // 信息窗口宽度
						height: 90, // 信息窗口高度
						title: "DCON", // 信息窗口标题
						enableMessage: true, //设置允许信息窗发送短息
					}
					var infoWindow = new BMap.InfoWindow("地址：北京市朝阳区工人体育场北路8号三里屯SOHO办公C座1102室", opts); // 创建信息窗口对象 
					marker.addEventListener("click", function() {
						map.openInfoWindow(infoWindow, point); //开启信息窗口
					});
				}
			},
		},
		mounted() {
			this.$nextTick(function() {
				var _this = this;
				_this.mapInit()
			});
			if ($(".wihte_bg").height()<$(window).height() ) {
	console.log(screen.height)
				$(".wihte_bg").height($(window).height() );
			}
 		}
	}
</script>

<style>

	
</style>