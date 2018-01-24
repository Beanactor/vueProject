<template>
	<div class="root">
		<el-carousel :interval="2000" type="card" height="150px" >
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <p :class="{ redcolor : isactive }">111111111111</p>
	</div>
	  
</template>

<script>
	export default {
		props:['isactive'],
		data() {
			return {
			}
		},
		
	}
</script>

<style>
	 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  
 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
     /*background: url('http://img5.imgtn.bdimg.com/it/u=2785923609,4179533346&fm=27&gp=0.jpg') no-repeat center center;
    background-size: 100%;*/
  }
 .redcolor {
  	color: red;
 }
</style>