<template>
	<div class="root">

		<h1>滚动中奖记录</h1>
		<div class="box_ul">
			<ul ref="con1" :class="{anim:animate==true}">
				<li v-for="item in WinRecord"><span>{{item.phone}}</span> <span>{{item.wardDesc}}</span> </li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				animate: false,

				WinRecord: [{
					wardDesc: "红包2.8元",
					phone: "155****0334"
				}, {
					wardDesc: "红包3.8元",
					phone: "155****0334"
				}, {
					wardDesc: "红包4.8元",
					phone: "155****0334"
				}, {
					wardDesc: "红包5.8元",
					phone: "155****0334"
				}, {
					wardDesc: "红包6.8元",
					phone: "155****0334"
				}]
			}
		},
		created() {
			setInterval(this.scroll, 2000)
		},
		methods: {
			scroll() { //消息滚动
				let _this = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
				let con1 = this.$refs.con1;
				con1.style.marginTop = '-50px';
				this.animate = !this.animate;
				this.timer = setTimeout(function() {
					_this.WinRecord.shift();
					_this.WinRecord.push(_this.WinRecord[0]);
					con1.style.marginTop = '0px';
					_this.animate = !_this.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
				}, 1000)
			},
		}
	}
</script>

<style scoped>
	ul>li {
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		color: #0094ff;
		display: flex;
		justify-content: space-around;
	}
	
	.anim {
		transition: all 0.5s;
	}
	
	.box_ul {
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.03);
		width: 90%;
		margin: 5%;
		height: 50px;
		overflow: hidden;
		
	}
</style>