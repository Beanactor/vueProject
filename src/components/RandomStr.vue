<template>
	<div class="root">
		<h1>{{ randomStr }}</h1>
		<h1>{{ randomStrSelf }}</h1>
	</div>
</template>

<script>
	import getRandomStr from "./../common/getRandomStr.js"
	export default {
		data() {
			return {
				randomStr: "",
				randomStrSelf: ""
			};
		},
		created() {
			this.randomStr = this.randomstring.generate({
				length : '6',
				charset: 'hex'
			});
			this.randomStrSelf = getRandomStr(6);
		},
		mounted() {

		},
		methods: {
			getRandomstring() {
				
			}
		}
	}
</script>

<style scoped>
	.stringWrap {}
</style>