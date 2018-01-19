<template>
	<div class="root">
		<div class="block">
			<el-carousel height="220px">
				<el-carousel-item>
					<h3>carouselImg1</h3>
					<img src="../assets/carouselImg/carouselImg1.jpg" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<h3>carouselImg2</h3>
					<img src="../assets/carouselImg/carouselImg2.jpg" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<h3>carouselImg3</h3>
					<img src="../assets/carouselImg/carouselImg3.jpg" alt="" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="navList">
			<span @click="showJob" :class="{redColor:Job}">就业咨询</span>
			<span @click="showMedia" :class="{redColor:Media}">媒体曝光</span>
			<span @click="showHot" :class="{redColor:Hot}">新闻热点</span>
		</div>
			<div class="content">
				<div class="Job" v-show="Job">
					
				</div>
				<div class="Media" v-show="Media">222222</div>
				<div class="Hot" v-show="Hot">333333</div>
			</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 为什么循环遍历数组不可以
				//				imgSrc: ['../assets/carouselImg/carouselImg1.jpg',
				//					'../assets/carouselImg/carouselImg2.jpg',
				//					'../assets/carouselImg/carouselImg3.jpg'
				//				]
				Job:true,
				Media:false,
				Hot:false
			}
		},
		created() {},
		methods:{
			showJob(){
				this.Job = true;
				this.Media=false,
				this.Hot=false
			},
			showMedia(){
				this.Job = false;
				this.Media=true,
				this.Hot=false
			},
			showHot(){
				this.Job = false;
				this.Media=false,
				this.Hot=true
			}
		}
	}
</script>

<style scoped>
	.root {
		width: 100%;
		height: 100%;
	}
	
	.el-carousel__item {
		width: 100%;
		height: 100%;
		text-align: center;
	}
	
	.el-carousel__item h3 {
		font-size: 26px;
		color: #f6f6f6;
		width: 200px;
		position: absolute;
		left: 50%;
		margin-left: -100px;
		bottom: 20px;
	}
	
	.navList {
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: space-around;
		background-color: #eee;
	}
	
	.navList span {
		width: 33.3%;
		border: 1px solid #ccc;
		border-top: 0;
		font-size: 16px;
	}
	
	.navList span:nth-child(2) {
		border-left: 0;
		border-right: 0;
	}
	.redColor {
		color:#f00
	}
</style>