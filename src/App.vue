<template>
  <div id="app">
    <router-view/>
		<Footer/>
  </div>
</template>

<script>
import Footer from "@/components/layouts/Footer.vue"

export default {
  name: 'App',
  components:{
		Footer
		}
}
</script>

<style>

*{
	margin: 0;
	padding: 0;
}
html,body{
  height: 100%;
}
#app {
	position: relative;
	min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom:150px;
  overflow: hidden;
 /*color: #333333;*/
}
</style>
